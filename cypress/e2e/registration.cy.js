import LoginPage from '../support/pages/loginPage'
import CreateAccountPage from '../support/pages/createAccountPage'
import AccountPage from '../support/pages/accountPage'
const loginPage = new LoginPage()
const createAccountPage = new CreateAccountPage()
const accountPage = new AccountPage()

beforeEach('Pre-condition', () => {
    loginPage.visit()
})
describe('Register new user', () => {
    it('Success Login', () => {

        loginPage.createAccount()
        createAccountPage.createNewAccout() 
        cy.get(accountPage.locators.successMessageArea).should('contain', 'Thank you for registering with Main Website Store.');
    })
})