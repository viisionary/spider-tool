/**
 *
 * @param start
 * @param end
 * @param step
 * @returns {Generator<Date, void, *>}
 */
const dateRangeGenerator = function* (start, end, step = 1) {
	let d = start;
	while (d <= end) {
		yield new Date(d);
		d.setDate(d.getDate() + step);
	}
};
module.exports = dateRangeGenerator
// Examples
// const getWeekStartAndEnd = require("./getWeekStartAndEnd");
// console.info([...dateRangeGenerator(...getWeekStartAndEnd(new Date()))].map(item=>item.toLocaleString()));
// console.info([...dateRangeGenerator(new Date('2021-06-01'), new Date('2021-06-04'))]);
