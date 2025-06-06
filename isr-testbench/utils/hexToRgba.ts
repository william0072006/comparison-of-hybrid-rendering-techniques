export const hexToRgba = (hex: string, alpha = 1) => {
  // Remove "#" if present
  hex = hex.replace(/^#/, "");

  // Handle shorthand hex (e.g. #f03)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r},${g},${b},${alpha})`;
};
