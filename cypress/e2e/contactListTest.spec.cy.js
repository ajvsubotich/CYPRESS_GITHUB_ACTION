/// <reference types="Cypress" />
import { LoginContactList } from "../pageObjects/login.contactListApp.pageObject.js"
import { ClientData } from "../builder/clientData.js"
const CLIENT = new ClientData().contactListData()


describe('Login Test in Contact List App', () => {
    
    const LOGIN = new LoginContactList()
    const URL = Cypress.env('contactListURL')
    const DATA = CLIENT

    it('Login', () => {
        
        const userEmail = DATA.userEmail
        const password = DATA.password

        LOGIN.loginDemov(URL, userEmail, password)
    });
})