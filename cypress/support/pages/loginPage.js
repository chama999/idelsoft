export default class LoginPage {
    locator =  {
            emailInput: '#email',
            passwordInput: '#pass',
            sendButton: '#send2',
            createAccountButton: 'a[class="action create primary"]',
            alertMessageArea: 'div[role="alert"]',
            emailErrorLabel: '#email-error',
            passwordErrorLabel: '#pass-error'
        }

    visit() {
        cy.visit(Cypress.env('BASE_URL') + "/customer/account/login/") // Cambia la URL según tu aplicación
    }

    fillUsername(username) {
        cy.get(this.locator.emailInput).type(username)
    }

    fillPassword(password) {
        cy.get(this.locator.passwordInput).type(password)
    }

    submit() {
        cy.get(this.locator.sendButton).click()
    }

    createAccount() {
        cy.get(this.locator.createAccountButton).click()
    }
}