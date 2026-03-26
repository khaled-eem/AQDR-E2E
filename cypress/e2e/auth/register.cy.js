describe("Register ", () => {
    const email =`TestUser${Date.now()}@test.com`
    const password =`Password123!`

    it("should register a new user the redirect to login page", () =>{

        cy.writeFile('./cypress/fixtures/user.json', {
        email: email,
        password: password
        })

        cy.visit("/register")

        cy.get('[data-testid="fullName-input"]').type("Test Uesr")
        cy.get('[data-testid="email-input"]').type(email)
        cy.get('[data-testid="password-input"]').type(password)
        cy.get('[data-testid="confirmPassword-input"]').type(password)
        cy.get('[data-testid="major-input"]').type('Information Technology')


        cy.get('[data-testid="register-button"]').click()

        cy.url().should('include','/login')
    })

    
})