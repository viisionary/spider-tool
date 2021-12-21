/**
 * copy to clipboard
 * @param str
 * @returns void
 */
const copyToClipboard = async (str: string) => {
    if (!document && !navigator) {
        return
    }
    let concequence;

    try {
        const cb = navigator && navigator.clipboard;
        if (cb && cb.writeText) {
            concequence = await cb.writeText(str).then(() => {
                return 'success';
            }).catch(() => {
                return ''
            })
        }
    } catch (e) {
        concequence = ''
    }

    if (concequence === 'success') {
        return;
    }
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};

export default copyToClipboard;
