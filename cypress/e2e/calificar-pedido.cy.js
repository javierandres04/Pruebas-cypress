describe('Iniciar sesión en la aplicación Ride Customer Dev', () => {
  beforeEach(() => {
    // La dirección de la página de inicio de sesión
    cy.visit('https://ride-customer-dev.web.app/login');
  });

  it('Iniciar sesión con éxito', () => {
    // Los selectores dependen de la estructura HTML de tu página
    // Asegúrate de reemplazarlos con los correctos para tu página

    // Ingresar el nombre de usuario
    cy.get('input[name=email]').type('ridecustomer4@mailinator.com');

    // Ingresar la contraseña
    cy.get('input[name=password]').type('asdf1234');

    // Hacer clic en el botón de inicio de sesión
    cy.get('#loginB').click();

    cy.get('ion-menu-button').click()
    cy.contains('Pedidos').click()

    cy.wait(500);

    cy.get('body').click(310, 10);

    // Cambiar por el codigo del pedido que se desea calificar, si ya esta calificado no se podra calificar
    cy.contains('Pedido: lnzW').click();
    
    cy.get('#rate-button').click();

    cy.get('#mainContent > app-rating > ion-content > ion-grid > form > ion-row:nth-child(2) > ion-item > div > label:nth-child(2)').click();

    cy.get('#review-text-area > div > textarea').type('Elver Envia saludos');

    cy.get('#send-button > ion-button').click();

    cy.get('#return-home').click();
    
  });
}); 