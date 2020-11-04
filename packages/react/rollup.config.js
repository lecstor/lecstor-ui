import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

export default [
  // {
  //   input: "src/index.ts",
  //   output: {
  //     dir: "umd",
  //     format: "umd",
  //     name: "lecstor-ui",
  //     esModule: false,
  //   },
  //   plugins: [commonjs(), nodeResolve(), typescript({ outDir: "umd", exclude: ["**/*.test.*"] })],
  // },
  {
    input: {
      index: "src/index.ts",
      Box: "src/components/Box/index.tsx",
      FlexBox: "src/components/FlexBox/index.tsx",
      Button: "src/components/form/Button/index.tsx",
      icons: "src/components/icons/index.ts",
      Layout: "src/components/Layout/index.tsx",
      theme: "src/theme/index.tsx",
      mergeTheme: "src/theme/mergeTheme.ts",
    },
    output: [
      {
        dir: "esm",
        format: "esm",
        sourcemap: true,
      },
      // {
      //   dir: "cjs",
      //   format: "cjs",
      // },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({
        outDir: "esm",
        exclude: ["**/*.test.*", "test/**/*"],
        tsBuildInfoFile: "esm/tsconfig.tsbuildinfo",
      }),
    ],
    external: ["@emotion/react", "react", "react-icons/fa", "styled-system"],
  },
  // {
  //   input: "dist/es/index.d.ts",
  //   output: [{ file: "dist/esm/index.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
];
