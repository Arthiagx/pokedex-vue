import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  ...pluginVue.configs["flat/essential"],
];