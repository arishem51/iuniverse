type CSSColors = {
  [key: string]: string;
};

export function generateCSSVarColor(colors: CSSColors) {
  let string = "";
  for (const color in colors) {
    string += `--color-${color}: ${colors[color]};`;
  }
  return string;
}
