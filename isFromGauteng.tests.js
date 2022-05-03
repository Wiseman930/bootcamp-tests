describe ("the isFromGauteng function", function(){
    it("should return a bolean if a registration is from Gauteng with 'true'", function(){
        assert.equal(true, isFromGauteng('DR 45 LR GP'));
    })
    it("should return a bolean if a registration is not from Gauteng with 'false'", function(){
        assert.equal(false, isFromGauteng('CJ 123 908'));
    })
})