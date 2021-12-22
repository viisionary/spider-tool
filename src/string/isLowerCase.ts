export function isLowerCase(str:string) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
}