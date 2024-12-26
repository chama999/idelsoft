// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from '../support/pages/loginPage'  
import CreateAccountPage from '../support/pages/createAccountPage'
import AccountPage from '../support/pages/accountPage'
const loginPage = new LoginPage()
const createAccountPage = new CreateAccountPage()
const accountPage = new AccountPage()
const BASE_API_URL = Cypress.env('BASE_API_URL') || 'https://magento.softwaretestingboard.com/rest/default'

Cypress.Commands.add('createNewAccountCommand', () => {
    loginPage.visit()
    loginPage.createAccount()
    createAccountPage.createNewAccout() 
    cy.get(accountPage.locators.successMessageArea).should('contain', 'Thank you for registering with Main Website Store.');
})

Cypress.Commands.add('getTokenAPI', () => {
    cy.request({
        method: 'POST',
        url: BASE_API_URL + '/V1/integration/customer/token/',
        body: {
            "username": "jdoe@example999.com",
            "password": "Password1"
        },
        failOnStatusCode: false
    }).then((response) => {
        if (response.status === 200) {
            cy.wrap(response.body);
        } else {
            cy.log('Request failed with status: ' + response.status);
            cy.log('Response body: ' + JSON.stringify(response.body));
            throw new Error('Failed to get token');
        }
    })
})