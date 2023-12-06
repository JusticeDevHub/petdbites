export const getTankAmount = (id: string, type: "water" | "food") => {
  const letters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const useLetters = 10;
  let amount = 0;
  for (
    let i = type === "water" ? 0 : useLetters;
    i < useLetters * (type === "water" ? 1 : 2);
    i++
  ) {
    const letter = id[id.length - 1 - i] || "";
    const addAmount = letters.indexOf(letter);
    amount += addAmount;
  }

  return Math.round((amount / (letters.length * (useLetters + 1))) * 100);
};
