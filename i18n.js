module.exports = {
  locales: ["en", "fa"],
  defaultLocale: "fa",
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["project"],
  },
};
