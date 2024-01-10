

export default class LoginPage {

    // login locators
    userInput = '#userName';
    passwordInput = '#password';
    loginButton = '#login';
    
    //New user locator
    firstName = '#firstname'
    lastName = '#lastname'
    userName = '#userName'
    password = '#password'
    capchat = '#g-recaptcha'
    // FUNCION LOGIN

    /**
     * 
     * @param {*} baseUrl 
     * @param {'usuario'} user 
     * @param {'pass'} pass
     * 
     * ```
     * js 
     * 
     *  loginIdpc(baseUrl, user, pass)
     * 
     * baseUrl = main Url
     * user = user data
     * pass = password client
     * 
     * ```
     * 
     */
    loginDemov(baseUrl, user, pass) {
        cy.visit(baseUrl);
        cy.get(this.userInput).type(user);
        cy.get(this.passwordInput).type(pass);
        cy.get(this.loginButton).click();
    }

    createUser(Url, first, last , user, pass ) {
        cy.visit(Url);
        cy.get(this.firstName).type(this.first=first);
        cy.get(this.lastName).type(this.last=last);
        cy.get(this.userName).type(this.user=user);
        cy.get(this.password).type(this.pass = pass);
        cy.get(this.capchat).click(12, 12);
        
    }
    

}

