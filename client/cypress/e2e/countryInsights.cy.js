describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
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
//
