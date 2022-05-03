describe("the getDay function", function(){
    it("should find out which day of the week is from specific date '2012-02-13' with 'Monday'",function(){
        assert.equal( 'Monday', getDay('2012-02-13'));
    } )
    it("should find out which day of the week is from specific date '2010-04-1' with 'Thursday'",function(){
        assert.equal( 'Thursday', getDay('2010-04-1'));
    } )

})