var sum=require('../src/chai');
var expect=require('chai').expect;

describe('test the sum of two number',function () {
    it('2+2 should be 4',function () {
        expect(sum(2,2)).to.be.equal(4);
    });
});