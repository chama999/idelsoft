import AccountPage from '../support/pages/accountPage'
const accountPage = new AccountPage()
describe('Account Tests', () => {
    beforeEach('Pre-condition', () => {
        cy.createNewAccountCommand()
    })
    it('Update Profile', () => {
        cy.get(accountPage.locators.accountSubTitle).should('contain', 'Account Information')
        cy.get(accountPage.locators.editLink).first().click()
        cy.get(accountPage.locators.firstNameInput).clear().type('John')
        cy.get(accountPage.locators.lastNameInput).clear().type('Doe')
        cy.get(accountPage.locators.saveButton).click()
        cy.get(accountPage.locators.successMessageArea).should('contain', 'You saved the account information.')
    })
})