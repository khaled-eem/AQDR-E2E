describe("Login", () => {

    it("should login then redirect to verify email page", () => {
        cy.fixture('user').then((user) => {
            cy.visit("/login")

            cy.get('[data-testid="email-input"]').type(user.email)
            cy.get('[data-testid="password-input"]').type(user.password)

            cy.get('[data-testid="login-button"]').click()

            cy.url().should('include', '/verify-email')

            cy.request("POST", `${Cypress.env('ApiURL')}/auth/test/confirm-email?email=${user.email}`).then((res) => {
                expect(res.status).to.eq(200)
            })

            cy.get('[data-testid="verify-email-button"]').click()

            cy.url().should('include', '/dashboard')
        })
    })
})
