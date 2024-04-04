export const truncateText = (text: string) => {
  if (text.length > 40) {
    return text.slice(0, 40) + "...";
  }
  return text;
};
export function getRandomColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Convert RGB to hex format
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}

export function getTextColor(bgColor: string) {
  // Convert hex color to RGB
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Calculate the relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  // Decide the text color based on luminance
  return luminance > 0.5 ? "#000" : "#fff";
}
