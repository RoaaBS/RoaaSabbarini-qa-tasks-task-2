///  <reference types="cypress" />
 describe("Create New User Account",()=>{
    it("Validate that a new user can successfully register using the Signup/login page",()=>{
        cy.visit("https://automationexercise.com/login");
        cy.get("h2").eq(2);
        cy.get(".signup-form [name=name]").type("roaa");
        cy.get(".signup-form [name=email]").type("roaa66@gmail.com");
        cy.get(".btn-default").eq(1).click()
        cy.get(".clearfix")
        cy.get('#id_gender2').check();
        cy.get("[for=name]")
        cy.get("#name")
        cy.get("[for=email]")
        cy.get("#email")
        cy.get("[for=password]")
        cy.get("#password").type(12345)
        cy.get(".form-group")
        cy.get('#days').select('23');
        cy.get('#months').select('7');  
        cy.get('#years').select('2001');
        cy.get("#uniform-newsletter")
        cy.get("#newsletter").check()
        cy.get("[for=optin]")
        cy.get("#optin").check()
        cy.get(".title.text-center")
        cy.get("[for=first_name]")
        cy.get("#first_name").type("hala")
        cy.get("[for=last_name]")
        cy.get("#last_name").type("bs")
        cy.get("[for=company]")
        cy.get("#company").type("NNU")
        cy.get("[for=address1]")
        cy.get("#address1").type("Tulkarm")
        cy.get("[for=address2]")
        cy.get("#address2").type("al-israa street")
        cy.get("#country").select("Israel")
        cy.get("[for=state]")
        cy.get("#state").type("israel")
        cy.get("[for=city]")
        cy.get("#city").type("tulkarm")
        cy.get("#zipcode").type("123")
        cy.get("[for=mobile_number]")
        cy.get("#mobile_number").type("0599999999")
        cy.contains("Create Account").click()
        cy.get(".title.text-center")
        cy.get("p")
        cy.get("p")
        cy.contains('a', 'Continue').click();


    })

    it("Validate that an existing user can log in using valid credentials",()=>{
        cy.visit("https://automationexercise.com/login");
        cy.get("h2").first();
        cy.get(".login-form [name=email]").type("roaa@gmail.com");
        cy.get(".login-form [name=password]").type("12345");
        cy.get(".btn-default").eq(0).click()
    })
 it.only("Validate that the  user cannot login using valid email and invalid password",()=>{
    cy.visit("https://automationexercise.com/login");
    cy.get("h2").first();
    cy.get(".login-form [name=email]").type("roaa@gmail.com");
    cy.get(".login-form [name=password]").type("123");
    cy.get(".btn-default").eq(0).click()
    cy.contains("Your email or password is incorrect!").should("be.visible");
})
it("Validate that the  user cannot login using invalid email and invalid password",()=>{
    cy.visit("https://automationexercise.com/login");
    cy.get("h2").first();
    cy.get(".login-form [name=email]").type("roa@gmail.com");
    cy.get(".login-form [name=password]").type("123");
    cy.get(".btn-default").eq(0).click()
    cy.contains("Your email or password is incorrect!").should("be.visible");
})
it("Validate that the  user cannot login using invalid email and valid password",()=>{
    cy.visit("https://automationexercise.com/login");
    cy.get("h2").first();
    cy.get(".login-form [name=email]").type("roa@gmail.com");
    cy.get(".login-form [name=password]").type("12345");
    cy.get(".btn-default").eq(0).click()
    cy.contains("Your email or password is incorrect!").should("be.visible");
})
})