
import userData from '../../fixtures/e2e-userData.json'
import { faker } from '@faker-js/faker';

export default class CreateAccountPage {
    locators = {
            firstNameInput: '#firstname',
            lastNameInput: '#lastname',
            emailInput: '#email_address',
            passwordInput: '#password',
            confirmPasswordInput: '#password-confirmation',
            createAccountButton: 'button[title="Create an Account"]',

        }
    createNewAccout() {
        //Generate random email and store it in e2e-userData.json
        const userEmail=faker.internet.email()

        cy.readFile('cypress/fixtures/e2e-userData.json')
            .then((data) => {
                data.email = userEmail;
                return cy.writeFile('cypress/fixtures/newUserData.json', data);
            });

        cy.get(this.locators.firstNameInput).type(userData.firstname)
        cy.get(this.locators.lastNameInput).type(userData.lastname)
        cy.get(this.locators.emailInput).type(userEmail)
        cy.get(this.locators.passwordInput).type(userData.userpwd)
        cy.get(this.locators.confirmPasswordInput).type(userData.userpwd)
        cy.get(this.locators.createAccountButton).click()

    }
}