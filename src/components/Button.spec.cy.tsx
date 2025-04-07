import { Button } from "./Button";

describe("Button Component", () => {
  it("should increment click count when clicked", () => {
    cy.mount(<Button />);


    // accessibility testing would require additional actions
    cy.get("ui5-button")
      .should("exist")
      .and("have.attr", "accessible-role", "Button")
      .and("contain", "Click me");

    cy.get("ui5-button").click();

    cy.contains("Clicked 1 times").should("exist");

    // click fails on disabled button  
    // CypressError: Timed out retrying after 4050ms: `cy.click()` failed because this element is `disabled`:
    // cy.get("ui5-button").click();
  });

  it("should disable button when clicked", () => {
    cy.mount(<Button />);

    cy.get("ui5-button").should('be.enabled')

    const button = cy.get("ui5-button");

    button.click();
    cy.get("ui5-button").should('be.disabled')
  });
}); 