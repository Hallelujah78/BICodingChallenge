describe("testing country insights application", () => {
  it("renders a number of components on the main page", () => {
    cy.visit("http://localhost:3000/");
    // aliases
    cy.get('[data-test="form-input"]').as("formInput");
    cy.get('[data-test="logo-main"]').as("logoMain");
    cy.get('[data-test="gear-icon-container"]')
      .within(() => {
        cy.get("svg");
      })
      .as("gearIcon");
    cy.get('[data-test="submit-button"]').as("submitButton");
    cy.get('[data-test="new-category-button"]').as("newCategoryButton");
    cy.get('[data-test="delete-all-button"]').as("deleteAllButton");
    // end of aliases

    // items are rendered
    cy.get("@formInput").should("exist");
    cy.get("@gearIcon").should("exist");
    cy.get("@formInput").should("exist");
    cy.get("@submitButton").should("exist").and("be.disabled");

    // clicking gear icon opens a menu, then the 'new category' and 'delete all' buttons visible. Clicking the gear icon again, the buttons should not be visible

    cy.get("@newCategoryButton").should("not.be.visible");
    cy.get("@deleteAllButton").should("not.be.visible");
    cy.get("@gearIcon").click();
    cy.get("@newCategoryButton").should("be.visible");
    cy.get("@deleteAllButton").should("be.visible");
    cy.get("@gearIcon").click();
    cy.get("@newCategoryButton").should("not.be.visible");
    cy.get("@deleteAllButton").should("not.be.visible");
  });
});

// data-test values
// form-input - combo box
// submit-button
// logo-main - click to reload page (brings you back to 'landing' page)
// gear-icon-container (will use .within and .get(svg))
// delete-all-button (category)
// new-category-button (category)
// category-article - clickable heading (expand/collapse) for each category
// tooltip-icon - displays tool tip on mouseover
// country-insights-logo - logo in the  navbar
// small-icon-logo - the 'CI' logo in the navbar
