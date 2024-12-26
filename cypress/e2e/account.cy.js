//utilizando createNewAccountCommand este comando necesito generar una precondition de un describe para que se genere una cuenta antes de cada test

describe('Account Tests', () => {
    beforeEach('Pre-condition', () => {
        cy.createNewAccountCommand()
    })
    it('Update Profile', () => {
    })
})