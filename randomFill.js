const sampleSize = require('./sampleSize')

/**
 *
 * @param toBeFilled 被填充的数组
 * @param toBeSelected 待选取的数组
 * @returns {[]}
 */
function randomFill(toBeFilled, toBeSelected) {
	const random = sampleSize(toBeSelected);
	const outcome =[];
	for (const value of toBeFilled) {
		if (value){
			outcome.push(value);
		}else {
			outcome.push(random.shift());
		}
	}
	return outcome
}
module.exports = randomFill
/**
 * example
 * randomFill([1, 2, , , 3, , 1, ,], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
 [
  1, 2,   'e', 'b',
  3, 'c', 1,   'f'
]
 */
