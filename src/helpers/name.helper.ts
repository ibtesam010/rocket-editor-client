export const generateName = (id: string) => {
  const letters = id.replace(/[^a-zA-Z]/g, "");

  if (letters.length < 2) {
    return letters; // Return as is if only one character after filtering
  }
  return (letters[0] + letters[letters.length - 1]).toUpperCase();
};
