import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "es/index.js",
    output: {
      file: "dist/umd/plonk.js",
      format: "umd",
      name: "plonk",
      esModule: false,
    },
    plugins: [commonjs(), nodeResolve()],
  },
  {
    input: "es/index.js",
    output: {
      file: "dist/esm/index.js",
      format: "esm",
    },
    plugins: [commonjs(), nodeResolve()],
  },
];
