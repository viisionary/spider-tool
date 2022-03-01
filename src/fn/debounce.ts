/**
 *
 * @param fn 防抖
 * @param timing
 */

type CustomDebounce = (fn: (...params: any) => any, timing: number) => (...params: any) => void;
export const debounce: CustomDebounce = (fn: (...params: any) => any, timing: number) => {
	let timer: any;
	return function(...params) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...params);
		}, timing);
	};
};
export default debounce
/*
EXAMPLE
const oldFN = (params) => {
	console.log('Can be executed', ...params)
}
const debounceFn = debounce(oldFN, 3000)
debounceFn('1','2','3')
debounceFn('params1', 'params2');
setTimeout(() => {
	debounceFn()
}, 3000)
 */

