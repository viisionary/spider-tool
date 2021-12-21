import getWeekStartAndEnd from './date/getWeekStartAndEnd';
import randomFill from "./array/randomFill";
import getURLParameters from "./string/getURLParameters";
import deDuplicationBy from "./array/deDuplicationBy";
import flatByKeys from "./array/flatByKeys";
import nest from "./array/nest";
import sampleSize from "./array/sampleSize";
import copyToClipboard from "./borrow/copyToClipboard";
import dateRangeGenerator from "./date/dateRangeGenerator";
import dayOfYear from "./date/dayOfYear";
import getWitchWeek from "./date/getWitchWeek";
import renameKeys from "./object/renameKeys";
import legibleByte from "./string/legibleByte";
import checkSpecificKey from "./string/checkSpecificKey";
import throttle from "./fn/throttle";
import delay from "./fn/delay";
import debounce from "./fn/debounce";
import charIsNumber from "./string/charIsNumber";
import downloadFile from "./borrow/downloadFile";
import charHasChinese from "./string/charHasChinese";
import charHasLetter from "./string/charHasLetter";
export default {
    // deDuplicationBy,
    // flatByKeys,
    nest,
    // randomFill,
    sampleSize,
    // borrow
    copyToClipboard,
    // downloadFile,

    // date
    dateRangeGenerator,
    dayOfYear,
    getWeekStartAndEnd,
    getWitchWeek,
    // fn
    debounce,
    delay,
    throttle,
    // string
    // charHasChinese,
    // charIsNumber,
    charIsLetter: charHasLetter,
    checkSpecificKey,
    getURLParameters,
    legibleByte,
    // object
    renameKeys,
}
