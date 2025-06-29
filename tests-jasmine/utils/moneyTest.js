import {formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', ()=>{
    it('converts cents into dollars', ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
        });
});