///  <reference types="cypress" />

describe("Add Product to Cart",()=>{
    before(()=>{
        cy.visit("https://automationexercise.com/login");
      cy.get(".login-form [name=email]").type("roaa@gmail.com");
      cy.get(".login-form [name=password]").type("12345");
      cy.get(".btn-default").eq(0).click()
    })
    it.only("Validate that a user can add a product to the shopping cart",()=>{
        cy.contains("View Product").first().click()
        cy.get(".product-details").should("be.visible")
        cy.contains('button', 'Add to cart').click();
        cy.get(".modal-content").should('be.visible')
        cy.contains('Continue Shopping').click()
        cy.contains("a","Cart").click()
        cy.get(".table-responsive.cart_info").should("exist")
      

    })
    it("Validate that user can add a product review",()=>{
        cy.contains("View Product").first().click()
        cy.get(".product-details").should("be.visible")
        cy.contains("Write Your Review").should("be.visible")
        cy.get("#review-form").should("be.visible")
        cy.get('#name').type("roaa");
        cy.get('#email').type("roaa@gmail.com");
        cy.get('#review').type("good app");
        cy.get("#button-review").click()
        cy.contains("Thank you for your review.").should("be.visible");

    })

})