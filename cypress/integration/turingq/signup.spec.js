/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable new-cap */
/// <reference types="Cypress" />

import signupPage from '../../support/pages/signupPage';

describe('Signup new user', () => {
  const username = 'visitor';
  const email = 'visitor2@email.com';
  const password = 'visiting';
  const confirmPassword = 'visiting';
  const page = new signupPage();

  beforeEach(() => {
    page.visitSignup();
    page.shouldValidationLocation('/signup');
  });

  it("Should insert user that doesn't exist and register user", () => {
    cy.registrationMock();

    page.getUserName(username);
    page.getEmail(email);
    page.getPassword(password);
    page.getConfirmPassword(confirmPassword);

    page.getSubmitForm();

    page.shouldAlertValidationUser('User signed up successfully!');
  });

  it('Not should enter a user that does exist and register the user', () => {
    cy.registrationFailMock();

    page.getUserName(username);
    page.getEmail(email);
    page.getPassword(password);
    page.getConfirmPassword(confirmPassword);

    page.getSubmitForm();

    page.shouldAlertValidationUser('Validation error');
  });
});
