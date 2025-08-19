import { useStorage } from "@vueuse/core";
import { watchEffect } from "vue";

// Define your available color themes
export const themes = [
  "slate",
  "blue",
  "green",
  "orange",
  "rose",
  "violet",
  "yellow",
  "red",
];

export function useColorTheme() {
  // Persist the selected color theme in local storage
  const theme = useStorage("app-color-theme", "slate");
  // This effect applies the correct theme class to the <html> element
  watchEffect(() => {
    const root = document.documentElement;
    // Remove all possible theme classes first
    themes.forEach((t) => {
      // The default theme 'slate' does not need a class
      if (t !== "slate") {
        root.classList.remove(`theme-${t}`);
      }
    });
    // Add the class for the currently selected theme
    if (theme.value !== "slate") {
      root.classList.add(`theme-${theme.value}`);
    }
  });
  return {
    theme, // The reactive theme state ('slate', 'red', etc.)
    themes, // The array of available themes
  };
}
