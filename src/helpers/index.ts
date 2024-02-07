export const truncateText = (text: string) => {
  if (text.length > 40) {
    return text.slice(0, 40) + "...";
  }
  return text;
};
