describe ("the sameWeekday function", function(){
    it("should return a bolean if two different dates have matching a weekday with 'true'", function(){
        assert.equal(true, sameWeekday('2016-11-19', '2016-11-26'));
    })
    it("should return a bolean if two different dates do not have a matching a weekday with 'false'", function(){
        assert.equal(false, sameWeekday('2016-11-19', '2016-11-28'));
    })
})