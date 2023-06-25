describe('template spec', () => {
  beforeEach ('Akses Web', () => {
    cy.visit('https://demoqa.com/')
  })
  it('Test clik', () => {
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#rightClickBtn').rightclick()
    cy.get('.col-md-6 > :nth-child(2) > :nth-child(3) > .btn').click()
  })
})