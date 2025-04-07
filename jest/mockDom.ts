import { jest } from '@jest/globals'
import { ElementInternalsShim } from './elementInternalsMock'

jest.mock('@ui5/webcomponents-base/dist/CustomElementsScope', () => ({
    getScopedVarName: () => '',
    getEffectiveScopingSuffixForTag: () => undefined,
    setCustomElementsScopingSuffix: jest.fn(),
}))
jest.mock('@ui5/webcomponents-base/dist/CustomElementsScopeUtils', () => ({
    getCustomElementsScopingSuffix: () => '',
    shouldScopeCustomElement: () => false,
    getEffectiveScopingSuffixForTag: () => undefined,
}))
jest.mock('@ui5/webcomponents-base/dist/config/Theme', () => ({
    setTheme: jest.fn(),
    getTheme: () => 'sap_horizon',
    isLegacyThemeFamily: () => false,
}))

jest.mock('react', () => {
    const originalReact: Record<string, unknown> = jest.requireActual('react')

    return {
        ...originalReact,
        useId: jest.fn(() => ':mocked'),
    }
})

jest.mock('@ui5/webcomponents-react-base', () => {
    const original: Record<string, unknown> = jest.requireActual(
        '@ui5/webcomponents-react-base'
    )

    return {
        ...original,
        useStylesheet: jest.fn(),
    }
})

HTMLElement.prototype.attachInternals = () =>
    new ElementInternalsShim() as unknown as ElementInternals
HTMLElement.prototype.showPopover = jest.fn()
HTMLElement.prototype.hidePopover = jest.fn()

// @ts-expect-error only providing the necessary parts for the test
global.CSSStyleSheet = class CSSStyleSheet {
    replaceSync = jest.fn()
}

global.fetch = (input: RequestInfo | URL) => {
    const ignoredHosts = ['sdk.openui5.org']
    const url =
        typeof input === 'string'
            ? new URL(input)
            : input instanceof URL
                ? input
                : new URL(input.url)
    const host = url.host

    if (
        typeof input !== 'string' &&
        !(input instanceof URL) &&
        !ignoredHosts.includes(host)
    ) {
        console.trace(input)
        throw new Error('Fetch was called from the above callee, please mock them.')
    }

    // Return default handling to avoid follow-up errors for UI5 static files
    return Promise.resolve({
        json: jest.fn(() => Promise.resolve({})),
    } as unknown as Response)
}

// Mocking the `matches` method to support `:has` pseudo selector
const originalMatches = Element.prototype.matches
Element.prototype.matches = function (selector) {
    const cleanedSelector = selector.replace(/:has\([^)]+\)/g, '').trim()

    if (!cleanedSelector) {
        return false
    }
    return originalMatches.call(this, cleanedSelector)
}

document.adoptedStyleSheets = []
