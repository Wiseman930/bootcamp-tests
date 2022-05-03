describe ("the isFromLimpopo function", function(){
    it("should return a bolean if a registration is from Limpopo with 'true'", function(){
        assert.equal(true, isFromLimpopo('KTR 990 L'));
    })
    it("should return a bolean if a registration is not from Limpopo with 'false'", function(){
        assert.equal(false, isFromLimpopo('W 990 N'));
    })
})