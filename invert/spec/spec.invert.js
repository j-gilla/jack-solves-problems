import { expect } from 'chai';
import invert from '../main.js';

describe('invert()', function(){
  it('takes a function', function() {
    expect(invert).to.be.a('function');
  });
  it('take one argument', function() {
    expect(invert.length).to.equal(1);
  });
  it('returns an array', function() {
    let arr = [];
    expect(invert(arr)).to.eql([]);
  });
  it('returns the correct ans for positive nums', function () {
    let arr = [1,2,3,4,5];
    expect(invert(arr)).to.eql([-1,-2,-3,-4,-5])
  });
  it('returns an array for negative nums', function(){
    let arr = [-1,-2,-3,-4,-5];
    expect(invert(arr)).to.eql([1,2,3,4,5])
  });
});
