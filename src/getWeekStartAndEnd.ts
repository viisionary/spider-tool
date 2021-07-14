/**
 *
 * @param time Date
 * @returns {Date[]}
 */
function getWeekStartAndEnd(time) {
	const week = time.getDay();
	const date = time.getDate();
	const year = time.getFullYear();
	const month = time.getMonth() + 1;
	const startMonth = date - week > 0 ? month : month - 1;
    const is31 = [1, 3, 5, 7, 8, 10, 12].includes(startMonth)
	const startDay = (date - week > 0) ? date - week : ((is31 ? 31 : 30) - week + 1);
	const endMonth = date + (6 - week) <= (is31 ? 31 : 30) ? month : month + 1;
	const endDay = (date + (6 - week) <= (is31 ? 31 : 30) ? date + (6 - week) : (6 - week))

	return [new Date(`${year}/${startMonth}/${startDay}`), new Date(`${year}/${endMonth}/${endDay} `),]
}

export default getWeekStartAndEnd
/**
 * EXAMPLE
 */
// console.log(
// 	getWeekRange(new Date('2021/6/1')).map(item=>item.toLocaleString()),
// 	getWeekRange(new Date('2021/7/1')),
// 	getWeekRange(new Date('2021/7/18')),
// 	getWeekRange(new Date('2021/7/24')),
// 	getWeekRange(new Date('2021/7/30')),
// 	getWeekRange(new Date('2021/8/1')),
// )

