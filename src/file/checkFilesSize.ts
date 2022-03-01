/**
 * 检查一组文件的文件大小，全部在限制以内则为 true，否则为 FALSE
 * //TODO 返回 ERROR FILE DETAIL
 * @param files
 * @param max
 */
const checkFilesSize = (files: FileList, max = 1024 * 1024 * 1024 * 2): boolean => {
    for (const filesKey in files) {
        const file = files[filesKey]
        if (file.size > max) {
            return false;
        }
    }
    return true
}
export default checkFilesSize