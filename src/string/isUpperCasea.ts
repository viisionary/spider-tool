export function isUpperCasea(str:string) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
}
