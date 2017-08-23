import { expect } from 'chai';
import oddCubed from '../main';

describe('oddCubed()', function(){
  it('is a function', function (){
    expect(oddCubed).to.be.a('function');
  });
  it('takes one argument', function(){
    expect(oddCubed.length).to.equal(1);
  });
  it('expects to equal 28', function () {
    expect(oddCubed([1,2,3,4])).to.equal(28)
  });
  // it('expects to equal 28', functions () {
  //   expect(oddCubed([-3,-2,2,3]).to.equal(0))
  // });
  // it('expects to equal 28', functions () {
  //   expect(oddCubed(["a",12,9,"z",42]).to.be('undefined'));
  // });
});
