/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
const titleLocator = '#title';
const bodyQuestionLocator = '#body';
const submitFormLocator = 'form';
const alertMessageLocator = '.MuiAlert-message';
const alertMessageTitleQuestionLocator = '#title-helper-text';
const alertMessageBodyQuestionLocator = '#body-helper-text';
const questionTitleLocator = 'a.MuiTypography-root';

class questionPage {
  visitHome = () => cy.visit(``);

  visitNewQuestion = () => cy.visit(`/questions/new`);

  clickInQuestion = (question) =>
    cy.contains(question).should('be.visible').click();

  getTitleQuestion = (titleQuestion) =>
    cy.get(titleLocator).type(titleQuestion);

  getBodyQuestion = (bodyQuestion) =>
    cy.get(bodyQuestionLocator).type(bodyQuestion);

  getSubmitForm = () => cy.get(submitFormLocator).submit();

  shouldValidationAlert = (message) => {
    cy.get(alertMessageLocator).contains(message).should('be.visible');
  };

  shouldValidationAlertTitleQuestion = (message) => {
    cy.get(alertMessageTitleQuestionLocator)
      .contains(message)
      .should('be.visible');
  };

  shouldValidationAlertBodyQuestion = (message) => {
    cy.get(alertMessageBodyQuestionLocator)
      .contains(message)
      .should('be.visible');
  };

  shouldValidationContainQuestion = (questionTitle) => {
    cy.contains(questionTitleLocator, questionTitle).should('be.visible');
  };
}

export default questionPage;
