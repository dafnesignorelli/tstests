export function sumForEach(arrayNum: number[]) {
  let sum = 0;
  arrayNum.forEach((n) => (sum += n));
  console.log(arrayNum.forEach((n) => (sum += n)));
  console.log(sum);
  return sum;
}
