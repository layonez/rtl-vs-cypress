import { CheckBoxComponent } from './CheckBox';

describe('CheckBoxComponent', () => {
    beforeEach(() => {
        cy.mount(<CheckBoxComponent />);
    });

    it('should render with initial unchecked state', () => {
        cy.get('ui5-checkbox').should('exist');
        cy.get('[data-testid="status-text"]').should('have.text', 'Status: Unchecked');
    });

    it('should toggle state when clicked', () => {
        cy.get('ui5-checkbox').click();
        cy.get('[data-testid="status-text"]').should('have.text', 'Status: Checked');

        cy.get('ui5-checkbox').click();
        cy.get('[data-testid="status-text"]').should('have.text', 'Status: Unchecked');
    });

    it('should have correct text label', () => {
        cy.get('ui5-checkbox').should('have.attr', 'text', 'Toggle me');
    });
});

describe('CheckBoxComponent disabled', () => {
    beforeEach(() => {
        cy.mount(<CheckBoxComponent disabled />);
    });

    it('should render disabled state', () => {
        cy.get('ui5-checkbox').should('exist');
        cy.get('ui5-checkbox').should('be.disabled')
    });

    it('click on disabled checkbox should not toggle state', () => {
        // force click to bypass disabled state
        cy.get('ui5-checkbox').click({ force: true });
        cy.get('[data-testid="status-text"]').should('have.text', 'Status: Unchecked');
    });
}); 