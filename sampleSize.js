/**
 * 随机排序并截取
 * @param arr
 * @param n 截取的数量，默认不截取 即 arr.length
 * @returns {*}
 */
const sampleSize = ([...arr], n = arr.length) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr.slice(0, n);
};

module.exports = sampleSize
