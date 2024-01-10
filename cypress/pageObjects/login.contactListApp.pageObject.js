export class LoginContactList {

    userInput = '#email'
    passwordInput = '#password'
    loginButton = '#submit'

    loginDemov(baseUrl, user, pass) {
        cy.visit(baseUrl);
        cy.get(this.userInput).type(user);
        cy.get(this.passwordInput).type(pass);
        cy.get(this.loginButton).click();
    }

}