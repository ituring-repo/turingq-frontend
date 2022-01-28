/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
const answerLocator = 'p';

class answerPage {
  shouldValidationContainAnswer = (answerTitle) => {
    cy.contains(answerLocator, answerTitle).should('be.visible');
  };
}

export default answerPage;
