/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
const emailLocator = '#email';
const passwordLocator = '#password';
const submitButtonLocator = 'form';
const alertMessageLocator = '.MuiAlert-message';

class loginPage {
  visitLogin = () => cy.visit(`/login`);

  getEmail = (email) => cy.get(emailLocator).type(email);

  getPassword = (password) =>
    cy.get(passwordLocator).type(password, { log: false });

  getSubmitButton = () => cy.get(submitButtonLocator).submit();

  shouldValidationLocation = () => {
    cy.location('pathname').should('equal', '/login');
  };

  shouldValidationNotLogin = (message) => {
    cy.get(alertMessageLocator).contains(message).should('be.visible');
  };

  shouldDisplayMenu = (menu, should) => {
    cy.contains(menu).should(should);
  };
}

export default loginPage;
