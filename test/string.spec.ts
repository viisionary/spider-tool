import charHasChinese from "../src/string/charHasChinese";
import {strictEqual} from "assert";
import charHasLetter from "../src/string/charHasLetter";
import charIsNumber from "../src/string/charIsNumber";
import checkSpecificKey from "../src/string/checkSpecificKey";
import getURLParameters from "../src/string/getURLParameters";
import legibleByte from "../src/string/legibleByte";

describe('字符串测试', () => {
    describe('charHasChinese', () => {
        it('中文', function () {
            strictEqual(charHasChinese('中文'), true);
        });
        it('hello含有中文', function () {
            strictEqual(charHasChinese('hello含有中文'), true);
            strictEqual(charHasChinese('hello'), false);
        });
        it('hello', function () {
            strictEqual(charHasChinese('hello'), false);
        });
    })
    describe('charHasLetter', () => {

        it('charHasLetter', function () {
            strictEqual(charHasLetter('hello'), true);
            strictEqual(charHasLetter('hello含有英文'), true);
            strictEqual(charHasLetter('中文'), false);
        });
    })
    describe('charIsNumber', () => {

        it('charIsNumber', function () {
            strictEqual(charIsNumber('12'), true);
            strictEqual(charIsNumber('sadf123'), false);
        });
    });
    describe('checkSpecificKey', () => {
        it('[]', function () {
            strictEqual(checkSpecificKey('[]'), true, '[]');
            strictEqual(checkSpecificKey('*&'), false, '*&');
        });
        it('checkSpecificKey', function () {
            strictEqual(checkSpecificKey('sadf123'), true, '字符串');
        });
    })
    describe('getURLParameters', () => {
        it('getURLParameters', function () {
            const urlParameters = getURLParameters('http://localhost:1313/?p1=1&p2=oo') as { p1: string, p2: string }
            strictEqual(urlParameters.hasOwnProperty('p1'), true)
            strictEqual(urlParameters.hasOwnProperty('p2'), true)
            strictEqual(urlParameters.p1, '1', 'p1=');
            strictEqual(urlParameters.p2, 'oo', 'p2=');
        });
    })
    describe('legibleByte', () => {
        it('legibleByte', function () {
            strictEqual(legibleByte(2048, 0), '2KB', '2048B=');
        });
    })
})