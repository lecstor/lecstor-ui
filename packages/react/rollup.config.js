import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "dist/es/index.js",
    output: {
      file: "dist/umd/index.js",
      format: "umd",
      name: "lecstor-ui",
      esModule: false,
    },
    plugins: [commonjs(), nodeResolve()],
  },
  {
    input: {
      // index: "es",
      Box: "dist/es/components/Box",
      FlexBox: "dist/es/components/FlexBox",
      Button: "dist/es/components/form/Button",
      icons: "dist/es/components/icons",
      Layout: "dist/es/components/Layout",
      theme: "dist/es/theme",
    },
    output: [
      {
        dir: "dist/esm",
        format: "esm",
      },
      {
        dir: "dist/cjs",
        format: "cjs",
      },
    ],
    plugins: [commonjs(), nodeResolve()],
    external: ["@emotion/react", "react", "react-icons/fa", "styled-system"],
  },
  {
    input: "dist/es/index.d.ts",
    output: [{ file: "dist/esm/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
