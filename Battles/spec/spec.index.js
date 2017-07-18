import { expect } from 'chai';
import battle from '../index.js';


describe('battle()', function(){
  it('is a function', function(){
    expect(battle).to.be.a('function');
  });
  it('takes two arguments', function(){
    expect(battle.length).to.equal(2);
  });
});
