export const delay = (ms: number, params = {}) =>
    new Promise((res) => {
        setTimeout(() => {
            res(params);
        }, ms);
    });
export default delay

