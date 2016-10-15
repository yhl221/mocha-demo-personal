var sum=require('../src/chai');
var expect=require('chai').expect;

describe('test the sum of two number',function () {
    it('2+2 should be 4',function () {
        expect(sum(2,2)).to.be.equal(4);
    });

    it('2+2 should not be 10',function () {
        expect(sum(2+2)).to.be.not.equal(10);
    })
});