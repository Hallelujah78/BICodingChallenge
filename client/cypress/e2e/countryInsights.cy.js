import "cypress-real-events";

describe("testing country insights application", () => {
  it("renders a number of components on the main page", () => {
    cy.visit("http://localhost:3000/");
    // aliases
    cy.get('[data-test="form-input"]').as("formContainer");
    cy.get('[data-test="logo-main"]').as("logoMain");
    cy.get('[data-test="gear-icon-container"]').within(() => {
      cy.get("svg").as("gearIcon");
    });

    cy.get('[data-test="submit-button"]').as("submitButton");
    cy.get('[data-test="new-category-button"]').as("newCategoryButton");
    cy.get('[data-test="delete-all-button"]').as("deleteAllButton");
    cy.get('[data-test="add-remove-icon"]').as("addRemoveIcon");

    // end of aliases

    // items are rendered
    cy.get("@logoMain").should("exist");
    cy.get("@gearIcon").should("exist");
    cy.get("@formContainer").within(() => {
      cy.get("input").should("exist");
    });
    cy.get("@submitButton").should("exist").and("be.disabled");

    // clicking gear icon opens a menu, then the 'new category' and 'delete all' buttons are visible. Clicking the gear icon again, the buttons should not be visible

    cy.get("@newCategoryButton").should("not.be.visible");
    cy.get("@deleteAllButton").should("not.be.visible");
    cy.get("@gearIcon").click();
    cy.get("@newCategoryButton").should("be.visible");
    cy.get("@deleteAllButton").should("be.visible");
    cy.get("@gearIcon").click();
    cy.get("@newCategoryButton").should("not.be.visible");
    cy.get("@deleteAllButton").should("not.be.visible");

    // input a value in select box
    cy.get("@formContainer").within(() => {
      cy.get("input").type("Nigeria{enter}");
    });
    cy.get("@submitButton").should("not.be.disabled").click();
    cy.get('[data-test^="category-article"]').should("have.length", 6);
    cy.contains("formal name").should("not.be.visible");
    cy.get('[data-test="category-article-general"]').click();
    cy.contains("formal name").should("be.visible");
    cy.get('[data-test="tooltip-text"]').should("not.exist");
    cy.get('[data-test="tooltip-icon"]').filter(":visible").realHover();
    cy.get('[data-test="tooltip-text"]').should("exist");

    cy.get('[data-test="category-article-general"]').click();
    cy.contains("formal name").should("not.be.visible");

    // clicking CI icon or country insights logo image should return to 'landing' page
    //  - category article will no longer be visible
    //  - 'a world of information' is visible
    cy.get('[data-test="landing-tag-line"]').should("not.exist");
    cy.get('[data-test="small-icon-logo"]').click();
    cy.get('[data-test="landing-tag-line"]').should(
      "contain.text",
      "a world of information"
    );

    // creating a new category
    cy.get("@gearIcon").click();
    cy.get("@newCategoryButton").click();
    cy.get('[data-test="field-title"]').should("not.exist");
    cy.get("@addRemoveIcon").eq(0).click();
    cy.get('[data-test="field-title"]').should("have.length", 1);
    cy.get("@addRemoveIcon").eq(1).click();
    cy.get('[data-test="field-title"]').should("have.length", 2);
    cy.get("@addRemoveIcon").eq(2).click();
    cy.get('[data-test="field-title"]').should("have.length", 3);

    // change the order of the fields
    cy.get('[data-test="field-title"]')
      .eq(0)
      .should("have.text", "Formal Name");
    cy.get('[data-test="field-title"]')
      .eq(1)
      .should("have.text", "Informal Name");
    cy.get('[data-test="field-title"]')
      .eq(2)
      .should("have.text", "Name in Official Language(s)");
    cy.get('[data-test="move-down-icon"]').eq(0).click();
    cy.get('[data-test="move-up-icon"]').eq(1).click();
    cy.get('[data-test="field-title"]')
      .eq(0)
      .should("have.text", "Informal Name");
    cy.get('[data-test="field-title"]')
      .eq(1)
      .should("have.text", "Name in Official Language(s)");
    cy.get('[data-test="field-title"]')
      .eq(2)
      .should("have.text", "Formal Name");
    cy.get("@addRemoveIcon").eq(2).click();
    cy.get('[data-test="field-title"]').should("have.length", 2);

    // enter the category title and create it
    cy.get('[data-test="category-title-input"]').type("Test Category");
    cy.get("div.Toastify__toast-container").should("not.exist");

    cy.get('[data-test="create-category-button"]').click();
    cy.get("div.Toastify__toast-container").should("exist");

    // check our new category exists
    cy.get("@formContainer").within(() => {
      cy.get("input").type("Nigeria{enter}");
    });
    cy.get("@submitButton").click();
    cy.get('[data-test^="category-article"]').should("have.length", 7);
    cy.get('[data-test="category-article-Test Category"]').should("exist");

    // delete all and make sure test category no longer exists
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

// add-remove-icon
// category-title-input
