import { add } from '../src/index.js'
import { expect } from 'chai'
// var expect = require('chai').expect;
// var add=require('../src/index.js');

describe('index.js', () => {
    it('addFun', () => {
        expect(add(1, 2)).to.be.equal(3);
    })
})