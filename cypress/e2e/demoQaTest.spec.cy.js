/// <reference types="Cypress" />
import LoginPage from '../pageObjects/login.demoQa.PageObject';
import clientData from '../builder/clientData';
import UrlData from '../builder/urlData';


describe('template spec', () => {

  const LOGIN = new LoginPage()
  const CLIENT = new clientData()
  const URL = new UrlData().urlsBookStoreAplication()

  const regiterUrl = `${Cypress.env('baseUrl')}${URL.register}`
  const loginUrl = `${Cypress.env('baseUrl')}${URL.login}`
  const datos = CLIENT.createUserData().userDefault
  const nombre = datos.firstName
  const apellido = datos.lastName
  const user = datos.userName
  const pass = datos.pass
  
  it('passes', () => {

    LOGIN.loginDemov( loginUrl, nombre, pass)

  })

  

})