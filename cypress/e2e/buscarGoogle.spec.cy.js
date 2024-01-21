/// <reference types="Cypress" />

describe('Prueba para buscar en google y ver en jenkins', () => { 
    
    it('Buscar en google', () => {
        cy.visit('www.google.com')
        cy.get('.lnXdpd').should('be.visible')
        
    });

})