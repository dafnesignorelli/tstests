export function worldCount(sentence: string): Record<string, number> {
  return sentence.split(" ").reduce((counts, word) => {
    word = word.trim();
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
}
