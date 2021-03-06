/**
 *
 * @param toBeFilled 被填充的数组
 * @param toBeSelected 待选取的数组
 * @returns {[]} 一个被填充满的新数组
 */
import sampleSize from "./sampleSize";

export interface RandomFillParams {
	toBeFilled: any[];
	toBeSelected: any[];
}

/**
 * 随机填充方法 从toBeSelected选中填充到toBeFilled
 * @param toBeFilled
 * @param toBeSelected
 */
const randomFill = ({toBeFilled, toBeSelected}: RandomFillParams): any[] => {
    const random = sampleSize(toBeSelected);
    const outcome = [];
    for (const value of toBeFilled) {
        if (value) {
            outcome.push(value);
        } else {
            outcome.push(random.shift());
        }
    }
    return outcome
};

export default randomFill
/**
 * example
 * randomFill([1, 2, , , 3, , 1, ,], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
 [
 1, 2,   'e', 'b',
 3, 'c', 1,   'f'
 ]
 */
