/**
 *
 * @param keysMap
 * @param obj
 * @returns {{}}
 */
const renameKeys = (keysMap:any, obj:any) =>
	Object.keys(obj).reduce(
		(acc, key) => ({
			...acc,
			...{ [keysMap[key] || key]: obj[key] }
		}),
		{}
	);
export default renameKeys
// module.exports = renameKeys
