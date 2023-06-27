describe('Hacer pedido en la aplicación Ride Customer Dev', () => {
  beforeEach(() => {
    // La dirección de la página de inicio de sesión
    cy.visit('https://ride-customer-dev.web.app/login');
  });

  it('Iniciar sesión con éxito', () => {
    // Los selectores dependen de la estructura HTML de tu página
    // Asegúrate de reemplazarlos con los correctos para tu página

    // Ingresar el nombre de usuario
    cy.get('input[name=email]').type('pollolandiasolutions@gmail.com');

    // Ingresar la contraseña
    cy.get('input[name=password]').type('pollo12345');

    // Hacer clic en el botón de inicio de sesión
    cy.get('#loginB').click();

    // Verificar que la página de inicio de sesión ya no es visible
    // (suponiendo que el usuario es redirigido a otra página después de iniciar sesión con éxito)
    cy.url().should('not.include', '/login');

    // Comprobar que el inicio de sesión fue exitoso
    // (puedes verificar la presencia de un elemento específico que solo aparece después del inicio de sesión)

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