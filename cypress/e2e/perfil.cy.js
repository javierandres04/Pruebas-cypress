const url = "https://ride-customer-dev.web.app/";

beforeEach(() => {
  cy.visit(url + "login");
});

it('Editar informacion del perfil', () => {
  cy.get('input[name="email"]').type('pollolandiasolutions@gmail.com');
  cy.get('input[name="password"]').type('pollo12345');
  
  cy.get('form').submit();
  
  cy.wait(700);

  cy.url().should('eq', url + "home");

  cy.get('ion-menu-button').click()

  cy.contains('Mi Perfil').click()

  cy.get('body').click(310, 10);

  cy.get('input[name="firstName"]').clear();
  cy.get('input[name="firstName"]').type('Maria');
  cy.get('input[name="lastName"]').clear();
  cy.get('input[name="lastName"]').type('Solis');
  cy.get('input[name="cellPhone"]').clear();
  cy.get('input[name="cellPhone"]').type('88123465');

  cy.contains('Guardar').click();

  cy.url().should('eq', url + "home");
  

});