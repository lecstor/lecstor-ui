import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "es/index.js",
    output: {
      file: "umd/plonk.js",
      format: "umd",
      name: "plonk",
      esModule: false,
    },
    plugins: [commonjs(), nodeResolve()],
  },
  {
    input: {
      // index: "es",
      Box: "es/components/Box",
      FlexBox: "es/components/FlexBox",
      Button: "es/components/form/Button",
      icons: "es/components/icons",
      theme: "es/theme",
    },
    output: [
      {
        dir: "esm",
        format: "esm",
      },
      {
        dir: "cjs",
        format: "cjs",
      },
    ],
    plugins: [commonjs(), nodeResolve()],
    external: [
      "@emotion/react",
      "react",
      "react-icons/fa",
      "styled-system"
    ]
  },
];
