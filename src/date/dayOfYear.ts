/**
 * 输出 日期是今年的第几天
 * @param date
 */
const dayOfYear = (date: Date) =>
    // @ts-ignore
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// Examples
// dayOfYear(new Date()); // 272

export default dayOfYear
