/**
 * 从第一列中取出与第二列重复的/单个key
 * @param list
 * @param deList
 * @param key
 * @returns {*}
 */
function deDuplicationBy(list, deList, key) {
	return list.filter((item) => !deList.map((item) => item ? item[key] : '').includes(item ? item[key] : ''))
}
export default deDuplicationBy
// whichWeek
/*
 console.info(deDuplicationBy([{ id: '1' }, { id: '3' }, {
	id: '11',
	name: '1'
}, {}, undefined, null, { hah: '1' }], [{ id: '1' },], 'id'))
*/

