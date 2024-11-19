module.exports = {
  locales: ["en", "fa"],
  sourceLocale: "fa",
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["src"],
      exclude: ["**/node_modules/**"],
    },
  ],
  format: "po",
};
