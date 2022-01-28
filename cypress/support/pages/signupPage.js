/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
const userNameLocator = '[id=name]';
const emailLocator = '[id=email]';
const passwordLocator = '[id=password]';
const confirmPasswordLocator = '[id=password_confirmation]';
const submitFormLocator = 'form';
const alertMessageLocator = '.MuiAlert-message';

class signupPage {
  visitSignup = () => cy.visit(`/signup`);

  getUserName = (username) => cy.get(userNameLocator).type(username);

  getEmail = (email) => cy.get(emailLocator).type(email);

  getPassword = (password) => cy.get(passwordLocator).type(password);

  getConfirmPassword = (confirmPassword) =>
    cy.get(confirmPasswordLocator).type(confirmPassword, { log: false });

  getSubmitForm = () => cy.get(submitFormLocator).submit();

  shouldValidationLocation = (pathName) => {
    cy.location('pathname').should('equal', pathName);
  };

  shouldAlertValidationUser = (message) => {
    cy.get(alertMessageLocator).contains(message).should('be.visible');
  };
}

export default signupPage;
