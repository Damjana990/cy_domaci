describe("Login test", () => {

    it('Visit gallery page', () => {
         cy.visit('/')
    })
    it ('Click on login button', () => {
        cy.get('.nav-link').eq(1).click()
    })
    
    //it ('Click on login button 2', () => {
      //  cy.get("a[href='/login']").click()
    //})

    it ('Login with valid credential', () => {
        cy.get('#email').type('test1234end@test.com')
        cy.get('button').click()
    })

    it ('Click on submit button', () => {
       cy.get("form > .btn.btn-custom").click()
    })

}) 