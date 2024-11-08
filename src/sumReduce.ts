export function sumReduce(soma: number[]) {
  let num = 0;
  console.log(soma.reduce((a, b)=> a + b, num));
  return soma.reduce((a, b)=> a + b, num)
}
