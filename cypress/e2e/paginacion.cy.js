const url = "https://ride-customer-dev.web.app/";

beforeEach(() => {
  cy.visit(url + "login");
});

it('Probar función de paginación', () => {
  cy.get('input[name="email"]').type('pollolandiasolutions@gmail.com');
  cy.get('input[name="password"]').type('pollo12345');
  
  cy.get('form').submit();
  
  cy.wait(800);

  cy.url().should('eq', url + "home");

  cy.wait(1000);
  
  cy.get('#mainContent > app-home > ion-content > div > app-pagination > pagination-controls > pagination-template > nav > ul > li.pagination-next').click();
  
  cy.get('ul').find('li').eq(3).should('have.class', 'current');;
});
