var sum=require('../src/chai');
var expect=require('chai').expect;
var should=require('chai').should();
var assert=require('chai').assert;

describe('for example of expect',function () {
    const foo = 'bar';
    const  beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };


    describe('test the sum of two number',function () {
        it('2+2 should be 4',function () {
            expect(sum(2,2)).to.be.equal(4);
        });

        it('2+2 should not be 10',function () {
            expect(sum(2+2)).to.be.not.equal(10);
        });
    });
//布尔值为true
    describe('test the boolean',function () {
        it('the boolean should be true',function () {
            expect('everything').to.be.ok;
        });

        it('the another should be false',function () {
            expect(false).to.not.be.ok;
        });
    });

    describe('test the type of the value',function () {
        it('the type of some value',function () {
            expect('test').to.be.a('string');
            expect({ foo: 'bar' }).to.be.an('object');
            expect(foo).to.have.length(3);
            expect(beverages).to.have.property('tea').with.length(3);
            // expect(foo).to.be.an.instanceof(Foo);
        });
    });


    describe('test the include',function () {
        it('the use of the include',function () {
            expect([1,2,3]).to.contain(2);//include 与 contain用法类似,此例中完全等价
            expect('foobar').to.include('foo');
            expect({ foo: 'bar', hello: 'universe' }).to.contain.keys('foo');
        })
    });
});


describe('for example of should',function () {

   const foo = 'bar';
    const beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    it('should',function () {
        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.length(3);
        beverages.should.have.property('tea').with.length(3);
    });
});


describe('for example of assert',function () {
   const foo = 'bar';
    const beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
   it('assert',function () {
       assert.typeOf(foo, 'string'); // without optional message
       assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
       assert.equal(foo, 'bar', 'foo equal `bar`');
       assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
       assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
   });
});