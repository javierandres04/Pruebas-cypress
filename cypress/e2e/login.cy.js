const url = "https://ride-customer-dev.web.app/";

beforeEach(() => {
  cy.visit(url + "login");
});

it('Iniciar sesión', () => {
  cy.get('input[name="email"]').type('pollolandiasolutions@gmail.com');
  cy.get('input[name="password"]').type('pollo12345');
  
  cy.get('form').submit();
  
  cy.wait(700);

  cy.url().should('eq', url + "home");
});

it('Cerrar sesión', () => {
  cy.get('input[name="email"]').type('pollolandiasolutions@gmail.com');
  cy.get('input[name="password"]').type('pollo12345');
  
  cy.get('form').submit();
  
  cy.wait(700);

  cy.get('ion-menu-button').click()

  cy.wait(300);

  cy.contains('Cerrar Sesión').click()
  
  cy.url().should('eq', url + "login");
});
