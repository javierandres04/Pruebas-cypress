const url = "https://ride-customer-dev.web.app/";

beforeEach(() => {
  cy.visit(url + "login");
});

it('Probar función de paginación', () => {
  cy.get('input[name="email"]').type('pollolandiasolutions@gmail.com');
  cy.get('input[name="password"]').type('pollo12345');
  
  cy.get('form').submit();
  
  cy.wait(2000);

  cy.url().should('eq', url + "home");

  cy.wait(3000);
  
  cy.get('#mainContent > app-home > ion-content > div > app-pagination > pagination-controls > pagination-template > nav > ul > li.pagination-next').click();
  
  cy.wait(3000);

  cy.get('ul').find('li').eq(3).should('have.class', 'current');
});
