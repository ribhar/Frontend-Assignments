/// <reference types="cypress" />

const data = [

    {
        id:1,
        name:"Ritik Bhardwaj",
        age:12
    },
    {
        id:2,
        name:"Anmol",
        age:123
    }
]

describe("form basic testing",function(){

    beforeEach(function(){

        cy.visit("http://localhost:3000");

    })
    it("should render without crash",function(){

        cy.get(".form").should("exist")

    });

    it("should get data on first render",function(){

        cy.intercept("GET","http://localhost:8080/form",data);

    })

    it("should type add something to list",function(){

        const text = {name:"Peeka Boo",age:12}

        cy.intercept("POST","http://localhost:8080/form",text)

        cy.get(".input-name").type("Peeka Boo");

        cy.get(".input-age").type("5");

        cy.get(".submit-btn").click();

        cy.get(".items").should("have.length",1)
    })

    it("should get error",function(){

        cy.intercept("POST","http://localhost:8080/form", {

            statusCode: 500,

            body: {

              name: 'Peter Pan',

              age: 30

            },
          }).as("formReq");

          cy.get(".input-name").type("Peter Pan");

          
        cy.get(".input-age").type("30");

        cy.get(".submit-btn").click();

        cy.get(".error").should("be.visible")

    })
    
})