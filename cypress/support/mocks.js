/* eslint-disable no-undef */
Cypress.Commands.add('loginMock', () => {
  cy.intercept('**/auth/login', { fixture: 'login.json' }).as('loginRequest');
});

Cypress.Commands.add('loginFailMock', () => {
  cy.intercept('**/auth/login', { statusCode: 400 }).as('loginFailRequest');
});

Cypress.Commands.add('registrationMock', () => {
  cy.intercept('**/registration', { statusCode: 201 }).as(
    'registrationRequest'
  );
});

Cypress.Commands.add('registrationFailMock', () => {
  cy.intercept('**/registration', { statusCode: 422 }).as(
    'registrationFailRequest'
  );
});

Cypress.Commands.add('newQuestionMock', () => {
  cy.intercept('POST', '**/questions/', { fixture: 'newQuestion.json' }).as(
    'newQuestionRequest'
  );
});

Cypress.Commands.add('questionsMock', () => {
  cy.intercept('**/questions?page*', { fixture: 'questions.json' }).as(
    'questionsRequest'
  );
});

Cypress.Commands.add('answersMock', () => {
  cy.intercept('**/questions/*', { fixture: 'answers.json' }).as(
    'answersRequest'
  );
});
