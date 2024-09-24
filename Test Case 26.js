describe('Test Case 26: Scroll Up without Arrow Button, Scroll Down & Delete Account', () => {

    it('Scrolls to the bottom of the page and verifies content', () => {
      cy.visit('https://automationexercise.com');
      cy.scrollTo('bottom');
      cy.get('footer').should('be.visible'); // Check footer is loaded
    });
  
    it('Scrolls up manually without using the arrow button', () => {
      cy.scrollTo('top');
      cy.get('header').should('be.visible'); // Check header is visible again
    });
  
    it('Deletes the account', () => {
      cy.get('a[href="/delete_account"]').click();
      cy.contains('ACCOUNT DELETED!').should('be.visible');
      cy.get('a[href="/"]').click(); // Click continue after deleting account
    });
  });
  