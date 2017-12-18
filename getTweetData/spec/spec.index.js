import { expect } from 'chai';
import getTweetData from '../index';

describe('getTweetData()', function () {
  'use strict';

  it('is a function', function () {
    expect(getTweetData).to.be.a('function');
  });
  it('takes a argument', function () {
    expect(getTweetData.length).to.equal(1);
  });
  it('returns an object', function (){
    expect(getTweetData()).to.eql({});
  });
});
