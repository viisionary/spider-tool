export interface FileContentMd5 {
    file: any;
    stepSize?: number;
    startPos?: number;
    md5: any;
}

/**
 * 对文件内容分片取 MD5 值， md5方法可传入、分片大小和起始位置可选， 默认值是 起点：0， 大小 10M
 * @param file
 * @param stepSize
 * @param startPos
 * @param md5
 */
const getFileContentMd5 = ({file, stepSize = 1024 * 1024 * 10, startPos = 0, md5}: FileContentMd5): Promise<any> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let blob;
        if (file.webkitSlice) {
            blob = file.webkitSlice(stepSize * startPos, stepSize * (startPos + 1));
        } else if (file.mozSlice) {
            blob = file.mozSlice(stepSize * startPos, stepSize * (startPos + 1));
        } else if (file.slice) {
            blob = file.slice(stepSize * startPos, stepSize * (startPos + 1));
        } else {
            console.error("浏览器不支持分段读取");
            return false;
        }
        reader.onload = () => {
            // @ts-ignore
            if (reader.result) {
                const uuid = md5(reader?.result + file.name + file.size + file.lastModified);
                resolve(uuid);
            }

        };
        blob && reader.readAsArrayBuffer(blob);
    });


};

export default getFileContentMd5