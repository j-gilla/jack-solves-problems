import { expect } from 'chai';
import getTweetData from '../index';

describe.only('getTweetData()', function () {
  'use strict';

  it('is a function', function () {
    expect(getTweetData).to.be.a('function');
  });
  it('takes a argument', function () {
    expect(getTweetData.length).to.equal(1);
  });
  it('expects argument to be a string', function (){
    var test = 1;
    expect(getTweetData(test)).to.equal(undefined);
  });
});
