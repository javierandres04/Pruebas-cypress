describe('Hacer pedido en la aplicación Ride Customer Dev', () => {
  beforeEach(() => {
    cy.visit('https://ride-customer-dev.web.app/login');
  });

  it('Iniciar sesión con éxito', () => {

    cy.get('input[name=email]').type('pollolandiasolutions@gmail.com');

    cy.get('input[name=password]').type('pollo12345');

    cy.get('#loginB').click();

    cy.url().should('not.include', '/login');

    cy.get('#mainContent > app-home > ion-content > div > ion-card:nth-child(1) > img').click();

    cy.get('#mainContent > app-locals-list > ion-content > div > ion-card:nth-child(2)').click();

    cy.get('#mainContent > app-products-list > ion-content > div > ion-card').click();

    cy.get('#mainContent > app-product-details > ion-content > ion-row > ion-col > ion-button').click();

    cy.wait(2000);

    cy.get('#enviar').click();

    cy.wait(2000);

    cy.get('#ion-overlay-3 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md > div.alert-button-group.sc-ion-alert-md > button.alert-button.ion-focusable.ion-activatable.confirmClass.sc-ion-alert-md').click();
    
    cy.wait(2000);

    cy.get('#ion-overlay-4 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md > div.alert-button-group.sc-ion-alert-md > button').click();
    
  });
}); 