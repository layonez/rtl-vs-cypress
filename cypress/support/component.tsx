import '@ui5/webcomponents-react/dist/Assets'

import { mount } from 'cypress/react'
import { ThemeProvider } from '@ui5/webcomponents-react'

Cypress.Commands.add('mount', (component, options = {}) => {
  const wrapped = (
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )

  return mount(wrapped, options)
})
