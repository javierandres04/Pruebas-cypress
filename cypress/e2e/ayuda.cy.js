const url = "https://ride-customer-dev.web.app/";

beforeEach(() => {
  cy.visit(url + "login");
});

it('Iniciar sesión', () => {
  cy.get('input[name="email"]').type('pollolandiasolutions@gmail.com');
  cy.get('input[name="password"]').type('pollo12345');
  
  cy.get('form').submit();
  
  cy.wait(700);

  cy.get('ion-menu-button').click()
  cy.contains('Ayuda').click()
  
  cy.wait(500);

  cy.get('body').click(310, 10);
  cy.url().should('eq', url + "contact");

});