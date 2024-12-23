import LoginPage from '../support/pages/loginPage'
import AccountPage from '../support/pages/accountPage'
import invalidUserData from '../fixtures/e2e-invalidCredentials.json'
const loginPage = new LoginPage()
const accountPage = new AccountPage()

beforeEach('Pre-condition', () => {
    loginPage.visit()
})
describe('Login', () => {
    it('Login - Invalid credentials', () => {
        loginPage.fillUsername(invalidUserData.nonExistingEmail)
        loginPage.fillPassword(invalidUserData.invalidPassword)
        loginPage.submit()

        cy.get(loginPage.locator.alertMessageArea).should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Login - Wrong email format', () => {
        loginPage.fillUsername(invalidUserData.invalidEmailFormat)
        loginPage.fillPassword(invalidUserData.invalidPassword)
        loginPage.submit()

        cy.get(loginPage.locator.emailErrorLabel).should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })

    it('Login - Required fields', () => {
        cy.reload()
        loginPage.submit()

        cy.get(loginPage.locator.emailErrorLabel).should('contain', 'This is a required field.')
        cy.get(loginPage.locator.passwordErrorLabel).should('contain', 'This is a required field.')

    })
})