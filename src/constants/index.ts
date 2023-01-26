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

export const MEDIAQUERY = {
  lessThanTablet: `width < ${BREAKPOINTS.tablet}`,
};
