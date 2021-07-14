var assert = require('assert');
describe('Date', function () {
	describe('#getWitchWeek()', function () {
		const getWitchWeek = require("../getWitchWeek");
		it('2021/7/14 应该是 7月第三周', function () {
			assert.equal(getWitchWeek(new Date('2021/7/14')), 3)
		});
		it('2021/6/28 应该是 7月第五周', function () {
			assert.equal(getWitchWeek(new Date('2021/6/28')), 5)
		});
	});
});
