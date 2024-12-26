export default class AccountPage {
    locators={
        accountSubTitle:'div > strong',
        editLink:'div.block-content > div > div.box-actions > a.action.edit > span',
        firstNameInput:'input[name="firstname"]',
        lastNameInput:'input[name="lastname"]',
        saveButton:'button[title="Save"]',
        successMessageArea:'div[role="alert"]'
    }
}