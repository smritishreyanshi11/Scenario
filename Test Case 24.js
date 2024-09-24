describe('Test Case 24: Download Invoice after Purchase Order', () => {
  
    it('Logs in with incorrect credentials and checks validation messages', () => {
      cy.visit('https://automationexercise.com');
      cy.get('a[href="/login"]').click();
      cy.get('input[name="email"]').type('invalid@example.com');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  
    it('Logs in with valid credentials', () => {
      cy.visit('https://automationexercise.com');
      cy.get('a[href="/login"]').click();
      cy.get('input[name="email"]').type('valid@example.com');
      cy.get('input[name="password"]').type('validpassword');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/account');
    });
  
    it('Adds products to cart and proceeds to checkout', () => {
      cy.visit('https://automationexercise.com');
      cy.get('a[href="/products"]').click();
      cy.get('a[href="/product_details/1"]').click();  // Add first product
      cy.get('button[class="btn btn-default cart"]').click();
      cy.get('a[href="/view_cart"]').click();
      cy.get('a[href="/checkout"]').click();
    });
  
    it('Completes purchase and downloads invoice', () => {
      cy.get('input[name="first_name"]').type('John');
      cy.get('input[name="last_name"]').type('Doe');
      cy.get('input[name="address"]').type('123 Cypress St.');
      cy.get('input[name="city"]').type('New York');
      cy.get('input[name="state"]').type('NY');
      cy.get('input[name="zip"]').type('10001');
      cy.get('input[name="mobile_number"]').type('1234567890');
      
      cy.get('button[type="submit"]').click();  // Place order
      
      // After purchase, download invoice
      cy.get('a[href="/download_invoice"]').click();
      // Check if the .txt file is downloaded (mock download in test)
    });
  });
  