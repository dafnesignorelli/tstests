export const flatArray = (arr: any) => arr.flat(Infinity);

console.log(flatArray([1, [2, [3, [4, 5]]]]));
