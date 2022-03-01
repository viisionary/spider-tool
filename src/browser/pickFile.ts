let fileInputEle: any;
const fileInputHandlerDefer: any = {};

/**
 * 调起系统选择窗口选择文件
 * @param limitTypes
 * @param multiple
 */
export const pickFile = (limitTypes: string[], multiple?: boolean): Promise<any> => {
    if (!fileInputEle) {
        fileInputEle = document.createElement("input");
        fileInputEle.setAttribute("type", "file");
        fileInputEle.style.display = "none";
        fileInputEle.addEventListener("change", () => {
            if (fileInputEle.files && fileInputEle.files.length) {
                if (multiple) {
                    fileInputHandlerDefer.resolve(fileInputEle.files);
                } else {
                    fileInputHandlerDefer.resolve(fileInputEle.files[0]);
                }
            } else {
                fileInputHandlerDefer.reject();
            }
        });
    }
    fileInputEle.removeAttribute("multiple");
    fileInputEle.removeAttribute("accept");
    fileInputEle.value = "";
    if (multiple) {
        fileInputEle.setAttribute("multiple", "multiple");
    }
    if (limitTypes && limitTypes.length) {
        // TODO check LimitTypes item startsWith '.'
        fileInputEle.setAttribute(
            "accept",
            limitTypes.join(",")
        );
    }
    return new Promise((resolve, reject) => {
        fileInputHandlerDefer.resolve = resolve;
        fileInputHandlerDefer.reject = reject;
        fileInputEle.click();
    });
};

export default pickFile
