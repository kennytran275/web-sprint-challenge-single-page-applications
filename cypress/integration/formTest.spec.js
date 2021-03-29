describe("Pizza form", () => {
  beforeEach(() => {
    // arbitrary code you want running before your tests start
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const cheeseInput = () => cy.get('input[name="cheese"]');
  const pepperoniInput = () => cy.get('input[name="pepperoni"]');

  const submitBtn = () => cy.get("#submitBtn");

  it("sanity test to make sure that tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Kenny")
      .should("have.value", "Kenny");

    emailInput()
      .should("have.value", "")
      .type("k@k.com")
      .should("have.value", "k@k.com");
  });

  it("can check the cheese box", () => {
    cheeseInput().click();
    cheeseInput().should("be.checked");
  });

  it("can check the multiple toppings", () => {
    cheeseInput().click();
    pepperoniInput().click();
    cheeseInput().should("be.checked");
    pepperoniInput().should("be.checked");
  });

  it("can submit a new order", () => {
    nameInput().type("Sammy");
    emailInput().type("s@s.com");
    cy.get("select").select("small");
    submitBtn().click();
    cy.get("#orderData").should("exist");
  });
});
