/**
 * @description
 *
 * @var current - current theme, true=light | false=dark
 * @var root - root of the document
 */

let current = true;
const root = document.documentElement;

export default {
  /**
   * Set's the theme to either light or dark mode.
   *
   * @param name - "light" | "dark" string
   */
  setTheme(name) {
    if (name === "light") this.setLight();
    else this.setDark();
  },
  /**
   * Toggles the current theme to another one
   *
   */
  toggle() {
    this.setTheme(current ? "dark" : "light");
  },
  setDark() {
    root.setAttribute("theme", "dark");
    current = false;
  },
  setLight() {
    root.setAttribute("theme", "light");
    current = true;
  },
};
