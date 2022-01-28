/* eslint-disable new-cap */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

import { data } from '../../fixtures/questions.json';
import { answers } from '../../fixtures/answers.json';
import { title, body } from '../../fixtures/newQuestion.json';
import questionPage from '../../support/pages/questionPage';
import answerPage from '../../support/pages/answerPage';

describe('Create and load questions', () => {
  const pageQuestion = new questionPage();
  const pageAnswer = new answerPage();
  const wrongTitleQuestion = 'New quest';
  const wrontBodyQUestion = 'New question test 1';

  it('Should create new question', () => {
    cy.newQuestionMock();
    cy.questionsMock();
    pageQuestion.visitNewQuestion();

    pageQuestion.getTitleQuestion(title);
    pageQuestion.getBodyQuestion(body);
    pageQuestion.getSubmitForm();

    pageQuestion.shouldValidationAlert('Question saved sucessfully');
  });

  it('Not should create new question', () => {
    cy.newQuestionMock();
    cy.questionsMock();
    pageQuestion.visitNewQuestion();

    pageQuestion.getTitleQuestion(wrongTitleQuestion);
    pageQuestion.getBodyQuestion(wrontBodyQUestion);
    pageQuestion.getSubmitForm();

    pageQuestion.shouldValidationAlertTitleQuestion(
      'The title must be at least 10 characters'
    );
    pageQuestion.shouldValidationAlertBodyQuestion(
      'The body must be at least 20 characters'
    );
  });

  it('Should load questions and answer without login', () => {
    cy.questionsMock();
    cy.answersMock();
    pageQuestion.visitHome();

    data.forEach((question) =>
      pageQuestion.shouldValidationContainQuestion(question.title)
    );

    pageQuestion.clickInQuestion('Two question mock');

    answers.forEach((answer) =>
      pageAnswer.shouldValidationContainAnswer(answer.author.name)
    );
    answers.forEach((answer) =>
      pageAnswer.shouldValidationContainAnswer(answer.body)
    );
  });
});
