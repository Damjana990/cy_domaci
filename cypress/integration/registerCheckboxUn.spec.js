describe ("Registration test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
    })

    it ('Click on register button', () => {
        cy.get('.nav-link').eq(2).click()
    })

    it ('Registration with valid credential', () => {
        cy.get('#first-name').clear().type('Test')
        cy.get('#last-name').clear().type('Test')
        cy.get('#email').clear().type('test123456end@test.com')
        cy.get('#password').clear().type('12345678')
        cy.get('#password-confirmation').clear().type('12345678')
    })

    it ('Click on submit button', () => {
        cy.get('form > .btn.btn-custom').click() 
    })

})