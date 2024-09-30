
export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  white: string;
  gray: string;
};

const colors: ThemeColors = {
  primary: "#1E40AF", // Blue
  secondary: "#FBBF24", // Yellow
  accent: "#6EE7B7", // Teal
  background: "#F9FAFB", // Light background
  text: "#111827", // Dark text
  white: "#FFFFFF",
  gray: "#6B7280", // Gray
};

export const theme = {
  colors,
};
