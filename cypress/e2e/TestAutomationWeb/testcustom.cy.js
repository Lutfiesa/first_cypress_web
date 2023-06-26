import data from '../../fixtures/databarang.json'

Cypress.Commands.add("Test_clik", () => {
    cy.fixture('/databarang.json').then((data) => {
        for (var index in data){
            cy.get('.inventory_item_description')
                .contains(data[index].nama)
                .click()
            cy.get('.inventory_details_desc_container > button')
                .click()
            cy.get('.header_secondary_container >')
                .click()
        }
    })
})