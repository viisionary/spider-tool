const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

/**
 *
 * @param array 嵌套数组
 * @param keys obj的key
 * @returns {*[]}
 */
function flat(array, keys) {
	let outcome = array
	for (const key of keys) {
		outcome = deepFlatten(outcome.map(item => item && item[key] ? item[key] : null));
	}
	return outcome.filter(item => item)
}

export default flat
// Example
//
// flat([
// 		{
// 			id: 'haha',
// 			children: [{ childrenId: 'hahha', subChildren: [{ subChildrenId: '11' }] }],
// 		},
// 		{
// 			id: 'haha2',
// 			children: [{ childrenId: 'haha2', subChildren: [{ subChildrenId: '22' }] }],
// 		},
// 		{ id: "hh" },
// 		{ id: "hh3",children:[] },
// 	],
// 	['children', 'subChildren']
// ))
