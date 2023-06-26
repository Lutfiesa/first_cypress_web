/// <reference types="cypress" />
import './testcustom.cy.js'

describe('template spec', () => {
    beforeEach ('Login Web', () => {
      cy.visit('https://saucedemo.com/')
      cy.get('[data-test="username"]')
        .type('standard_user')
      cy.get('[data-test="password"]')
        .type('secret_sauce')
      cy.get('[data-test="login-button"]')
        .click()
    })

    it ('Pilih Barang', () =>{
        cy.Test_clik()
  
    })
})