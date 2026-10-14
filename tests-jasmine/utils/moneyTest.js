import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency',()=>{
    it('converts cents to dollors',()=>{
        expect(formatCurrency(2095)).toEqual('20.95')
    });
    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    describe('test suite: rounds of',()=>{
 it('check rounds of function',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01')
    });
    it('check also rounds of',()=>{
        expect(formatCurrency(2000.4)).toEqual('20.00')
    });
    })
   
})