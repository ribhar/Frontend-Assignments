/// <reference types="cypress" />


describe("testing todo application",function(){

    it("should type something",function(){

        cy.visit("http://localhost:3000");

        cy.get(".input-box").type("Buy Candies").should("have.value","Buy Candies");

    });
    
    it("should add some todo in the list",function(){

        cy.visit("http://localhost:3000");

        const text = "Buy Milk";

        cy.intercept("GET","http://localhost:8080/todos",[{

            id:1,

            title:"Buy Candies",

            status:false

        }]).as("todoReq");

        cy.intercept("POST","http://localhost:8080/todos",[{

            id:2,

            title:text,

            status:false

        }]).as("todoReq");

        cy.get(".input-box").type(text);

        cy.get(".add-todo").click();

        cy.wait("@todoReq");

        cy.get(".todo-list .items").should("have.length",2).and("contain",text);
    })

    it("should delete one item",function(){

        cy.visit("http://localhost:3000");

        const text = "Buy Milk";

        cy.intercept("POST","http://localhost:8080/todos",[{

            id:2,

            title:text,

            status:false

        }]).as("todoReq");

        cy.get(".input-box").type(text);

        cy.get(".add-todo").click();

        cy.wait("@todoReq");

        cy.get(".delete-todo").click();

        cy.get(".todo-list .items").should("have.length",0)
        
    })
})