/** @type {import('prettier').Config} */
const prettierConfig = async () => {
  const tailwindPlugin = await import('prettier-plugin-tailwindcss');
  
  return {
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    importOrder: [
      "^(react/(.*)$)|^(react$)",
      "^(next/(.*)$)|^(next$)",
      "<THIRD_PARTY_MODULES>",
      "",
      "^types$",
      "^@local/(.*)$",
      "^@assets/(.*)$",
      "^@components/(.*)$",
      "^@config/(.*)$",
      "^@hooks/(.*)$",
      "^@styles/(.*)$",
      "^@types/(.*)$",
      "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    plugins: [
      "@ianvs/prettier-plugin-sort-imports",
      tailwindPlugin // Use the imported plugin
    ],
  };
};

module.exports = prettierConfig;
