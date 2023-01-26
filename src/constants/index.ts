export const COLORS = {
  dark: "#171717",
  lightGray: "#e8e8e8",
  white: "#ffffff",
  lightDark: "#2c2c2c",
  black: "#000000",
} as const;

const BREAKPOINTS = {
  tablet: 1300,
};

const DIMENSION = {
  width: "width",
  height: "height",
};

const COMPARISON = {
  lessThan: "<",
  lessThanOrEqualTo: "<=",
  greaterThan: ">",
  greaterThanOrEualTo: ">=",
};

export const MEDIAQUERY = {
  lessThanTablet: `${DIMENSION.width} ${COMPARISON.lessThan} ${BREAKPOINTS.tablet}px`,
};
