
describe("Basic testing",function(){
    it("should pass",function(){
        cy.visit("http://localhost:3000/");
        cy.get(".inputTag").should("exist");
    });
    it("should type somthing in input box",function(){
        const text = "My name is Ritik Bhardwaj";
        cy.visit("http://localhost:3000/");
        cy.get(".inputTag").type("My name is Ritik Bhardwaj").should("have.value",text);
    });
})