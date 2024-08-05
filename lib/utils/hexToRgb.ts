export function hexToRgb(hex: string) {
  const normalizedHex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => `${r}${r}${g}${g}${b}${b}`
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    normalizedHex
  );

  if (!result) return null;

  const [_, r, g, b] = result;
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  };
}
