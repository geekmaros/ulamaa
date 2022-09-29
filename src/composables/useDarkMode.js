import { ref } from "vue";

export const useDarkMode = (theme) => {
  let userTheme = ref(theme);

  const initTheme = () => {
    const themeMode = getThemeFromLocalStorage() || getUserMediaPreference();
    setUserTheme(themeMode);
  };

  const getUserMediaPreference = () => {
    const hasDarkModePreference = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;
    // hasDarkModePreference ? setUserTheme('dark') : setUserTheme('light');
    if (hasDarkModePreference) {
      return "dark";
    } else {
      return "light";
    }
  };

  const setUserTheme = (theme) => {
    localStorage.setItem("userTheme", theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  };

  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("userTheme");
  };

  const toggleUserTheme = () => {
    const getUserThemeFromLocalStorage = getThemeFromLocalStorage();
    if (getUserThemeFromLocalStorage === "dark") {
      setUserTheme("light");
    } else {
      setUserTheme("dark");
    }
  };
  return {
    initTheme,
    getUserMediaPreference,
    setUserTheme,
    toggleUserTheme,
    userTheme,
  };
};
