describe("the isFrom fuction", function(){

    it("should show return boolean if the registration 'CJ 98912' is from Western cape or Natal with 'true'", function(){
        assert.equal(true, isFrom('CJ 98912', 'CJ'))

    });
    it("should show return boolean if the registration 'CJ 98912' is not from Western cape or Natal with 'false'", function(){
        assert.equal(false, isFrom('98912 CK', 'CK'))

    });
    it("should show return boolean if the registration 'NN 98912' is from Western cape or Natal with 'true'", function(){
        assert.equal(true, isFrom('NN 98912', 'NN'))

    });

})