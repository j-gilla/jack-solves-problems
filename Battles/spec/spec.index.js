import { expect } from 'chai';
import battle from '../index.js';


describe('battle()', function(){
  it('is a function', function(){
    expect(battle).to.be.a('function');
  });
  it('takes two arguments', function(){
    expect(battle.length).to.equal(2);
  });
  it('returns the correct answer when x is the longest word', function(){
    let x = 'ONE';
    let y = 'ABC';
    expect(battle(x,y)).to.equal(x);
  });
  it('returns the correct answer when y is the longest word', function(){
    let x = 'ONE';
    let y = 'TWO';
    expect(battle(x,y)).to.equal(y);
  });
  it('returns tie when both words the same length', function(){
    let x = 'bollokcs';
    let y = 'bollokcs';
    expect(battle(x,y)).to.equal('Tie!');
  });
  it('removes lowercase bitches from the mix', function(){
    let x = 'OnE';
    let y = 'TWO';
    expect(battle(x,y)).to.equal(y);
  });
});
