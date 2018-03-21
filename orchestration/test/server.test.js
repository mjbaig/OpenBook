'use strict'

var assert = require('assert');
var underTest = require('../server');

describe('Test server', () => {
    describe('sample test', () => {
        it('should pass', () => {
            assert(1 == 1);
        });
    });

    describe('Test server export', () => {
        it('Check if router exists', () => {
            assert(!!underTest.env);
        });
    });
});
