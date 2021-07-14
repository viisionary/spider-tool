const throttle = (fn, timing) => {
	let trigger;
	return function (...params) {
		if (trigger) return;
		trigger = true;
		fn(params);
		setTimeout(() => {
			trigger = false;
		}, timing);
	}
};
module.exports = throttle;
/**
 * EXAMPLE
 const oldFN = (params) => {
	console.log('Can be executed', ...params)
}
const newFN = throttle(oldFN, 3000)
newFN('1','2')
newFN('param1','param2')
setTimeout(()=>{
	newFN()
},3000)
newFN('3','4')
 */


