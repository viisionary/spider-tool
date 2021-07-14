/**
 *
 * @param time new Date('2021/6/17')
 * @return number '3'
 */
const getWitchWeek = (time: Date) => {
    const date = time.getDate();
    let week = time.getDay();
    if (week === 0) {
        week = 7;
    }
    return Math.ceil((date + 6 - week) / 7);
};
export default getWitchWeek
// module.exports = getWitchWeek
// console.info(getWitchWeek(new Date('2021/6/1')))
