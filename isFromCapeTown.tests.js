describe ("the isFromCapeTown function", function(){
    it("should return a bolean if a registration Number is from Cape Town with 'true'", function(){
        assert.equal(true, isFromCapeTown('CA 123 908'));
    })
    it("should return a bolean if a registration Number is not from Cape Town with 'false'", function(){
        assert.equal(false, isFromCapeTown('CJ 123 908'));
    })
})