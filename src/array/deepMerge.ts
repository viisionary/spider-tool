const deepMerge = (a: Record<any, any>, b: Record<any, any>, fn) =>
    [...Array.from(new Set([...Object.keys(a), ...Object.keys(b)]))].reduce(
        (acc, key) => ({...acc, [key]: fn(key, a[key], b[key])}),
        {}
    );

export default deepMerge