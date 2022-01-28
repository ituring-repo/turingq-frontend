/* eslint-disable new-cap */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

import loginPage from '../../support/pages/loginPage';

describe('Login user', () => {
  const page = new loginPage();
  const email = 'visitor2@email.com';
  const password = 'visiting';
  const wrongPassword = 'visiting1';

  beforeEach(() => {
    page.visitLogin();
    page.shouldValidationLocation();
  });

  it('Should login if user register in the system', () => {
    cy.loginMock();

    page.getEmail(email);
    page.getPassword(password);

    page.getSubmitButton();

    page.shouldDisplayMenu('Logout', 'be.visible');
    page.shouldDisplayMenu('Ask a question', 'be.visible');
  });

  it('Not should login if user does not register in the system', () => {
    cy.loginFailMock();

    page.getEmail(email);
    page.getPassword(wrongPassword);

    page.getSubmitButton();

    page.shouldValidationNotLogin('Invalid credentials');
    page.shouldDisplayMenu('Logout', 'not.exist');
    page.shouldDisplayMenu('Ask a question', 'not.exist');
  });
});
