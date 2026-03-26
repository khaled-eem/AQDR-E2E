describe("Edit User", () => {
    it("should edit user", () => {
        cy.visit("/login")
        
        cy.intercept('PUT', '**/api/student').as('saveCall');
           
        cy.fixture('user').then((user) => {
            cy.get('[data-testid="email-input"]').type(user.email);
            cy.get('[data-testid="password-input"]').type(user.password);
            cy.get('[data-testid="login-button"]').click();
        
            cy.url().should('include', '/dashboard');
               
        
        cy.get('[data-testid="menu-button"]').click();
        cy.get('.mat-mdc-menu-panel').should('be.visible');
        cy.get('[data-testid="profile-page"]').click();
        cy.url().should('include', '/profile');
        
        
        
        cy.get('[data-testid="full-name-input"]').clear().type('Test User Updated');
        cy.get('[data-testid="major-input"]').clear().type('Major Test Updated');
        cy.get('[data-testid="save-button"]').click();
        
              cy.wait('@saveCall').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            })
        
            })  
    })
})