describe("api-request", () => {
    it("shows my name from GitHub", () => {
        cy.intercept('https://api.github.com/users/dearshrewdwit', { fixture: 'mock.json' })
        cy.visit('/')
        cy.get('#name').should('contain', 'Nkosilathi Sibanda (mockedydoo)')
        cy.get('[alt="Kosi"]').should('be.visible')
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
        cy.get('#username').should('contain', 'thekosiguy (mockedydoo)')
    })
})