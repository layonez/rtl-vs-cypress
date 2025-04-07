import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "react",
            bundler: "webpack",
        },
        indexHtmlFile: 'cypress/support/component-index.html',
        supportFile: 'cypress/support/component.tsx',
        specPattern: 'src/**/*.spec.cy.tsx',
    },
    video: false,
    screenshotOnRunFailure: false,
}); 