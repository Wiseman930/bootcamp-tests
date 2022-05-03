describe("the greet fuction", function(){

    it("should greet Arnold with 'Hello, Arnold'", function(){
        assert.equal('Hello, Arnold', greet("Arnold"))

    });
    it("should greet Wiseman with 'Hello, Wiseman'", function(){
        assert.equal('Hello, Wiseman', greet("Wiseman"))

    })

})