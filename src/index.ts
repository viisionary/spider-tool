import getWeekStartAndEnd from './date/getWeekStartAndEnd';
import getURLParameters from "./string/getURLParameters";
import deDuplicationBy from "./array/deDuplicationBy";
import flatByKeys from "./array/flatByKeys";
import nest from "./array/nest";
import sampleSize from "./array/sampleSize";
import copyToClipboard from "./browser/copyToClipboard";
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
import downloadFile from "./browser/downloadFile";
import charHasChinese from "./string/charHasChinese";
import charHasLetter from "./string/charHasLetter";
import randomFill from "./array/randomFill";
import pickFile from "./browser/pickFile";
import blobToBase64 from "./file/blobToBase64";
import checkFilesSize from "./file/checkFilesSize";
import getFileContentMd5 from "./file/getFileContentMd5";
import convertBase64UrlToBlob from "./file/convertBase64UrlToBlob";

export default {
    deDuplicationBy,
    flatByKeys,
    nest,
    randomFill,
    sampleSize,
    // borrow
    copyToClipboard,
    downloadFile,
    pickFile,

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
    charHasChinese,
    charIsNumber,
    charIsLetter: charHasLetter,
    checkSpecificKey,
    getURLParameters,
    legibleByte,
    // object
    renameKeys,
    //file
    blobToBase64,
    checkFilesSize,
    convertBase64UrlToBlob,
    getFileContentMd5
}
