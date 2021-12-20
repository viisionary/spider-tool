// import getWitchWeek from "../src/getWitchWeek";
import {equal} from "assert";
import utils from '../src/index'
import getWitchWeek from "../src/date/getWitchWeek";
describe('Date', function () {
    describe('#getWitchWeek()', function () {
        it('2021/7/14 应该是 7月第三周', function () {
            equal(getWitchWeek(new Date('2021/7/14')), 3)
        });
        it('2021/6/28 应该是 7月第五周', function () {
            equal(getWitchWeek(new Date('2021/6/28')), 5)
        });
    });
    describe('#getWeekStartAndEnd()', function () {
        // const getWitchWeek = require("../getWitchWeek");
        it('import 正确使用', function () {
            console.log(utils.getWeekStartAndEnd(new Date()))
            // console.log(getWeekStartAndEnd(new Date()))
        });
        it('sampleSize', function () {
            // console.log(getWeekStartAndEnd(new Date()))
        });
    });
});
