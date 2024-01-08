const { generateUser } = require('../support/generateUser');

describe('Home page', () => {
  it('should provide an ability to register a new user', () => {
    const {
      userName,
      password
    } = generateUser();

    cy.visit('/');
    cy.get('#signin2').click();

    cy.get('#sign-username').type(userName);
    cy.get('#sign-password').type(password);

    cy.contains('[class="btn btn-primary"]', 'Sign up').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(`Sign up successful.`);
    });

    cy.on('window:alert', () => true);
  });

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.get('#login2').click();
    cy.get('#loginusername').type('Anat');
    cy.get('#loginpassword').type('Qwer1');
    cy.contains('[class="btn btn-primary"]', 'Log in').click();

    cy.get('#nameofuser').should('contain', 'Anat');
  });

  it('should provide an ability to add item to the cart', () => {
    cy.visit('/');

    cy.get('#login2').click();
    cy.get('#loginusername').type('Anat');
    cy.get('#loginpassword').type('Qwer1');
    cy.contains('[class="btn btn-primary"]', 'Log in').click();

    cy.contains('[id="itemc"]', 'Phones').click();
    cy.contains('[class="hrefch"]', 'Samsung galaxy s6').click();
    cy.get('[onclick="addToCart(1)"]').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(`Product added.`);
    });

    cy.on('window:alert', () => true);

    cy.get('#cartur').click();

    cy.get('.table-responsive').should('contain', 'Samsung galaxy s6');
  });
});
