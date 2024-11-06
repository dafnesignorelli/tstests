export function remove(arr: Number[]) {
  return [...new Set(arr)];
}

console.log(remove([1, 4, 1, 7, 4, 5, 3, 8]))