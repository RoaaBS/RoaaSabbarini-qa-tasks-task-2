/// <reference types="cypress" />
 describe("Search for a Product",()=>{
   before(()=>{
      //run the code once before all test case
      cy.visit("https://automationexercise.com/login");
      cy.get(".login-form [name=email]").type("roaa@gmail.com");
      cy.get(".login-form [name=password]").type("12345");
      cy.get(".btn-default").eq(0).click()
  })
    it("Validate that the correct results appear when using search bar using valid  names",()=>{
     cy.get(".nav.navbar-nav").contains('a',' Products').click();
     cy.get("#search_product").type("dress");
     cy.get("#submit_search").click()
     cy.contains("Searched Products").should('be.visible')
     cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
    })
    it("Validate that the correct results appear when using search bar using  invalid product names",()=>{
      cy.get(".nav.navbar-nav").contains('a',' Products').click();
      cy.get("#search_product").type("x123");
      cy.get("#submit_search").click()
      cy.contains("Searched Products").should('be.visible')
      cy.get('.product-image-wrapper').should('have.length', 0);
     })
 })