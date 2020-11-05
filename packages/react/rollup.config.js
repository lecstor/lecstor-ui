import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "esm",
        format: "esm",
        sourcemap: true,
        sourcemapExcludeSources: true,
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({
        outDir: "esm",
        rootDir: "src",
        exclude: ["**/*.test.*", "test/**/*"],
        tsBuildInfoFile: "esm/tsconfig.tsbuildinfo",
      }),
    ],
    external: ["tslib", "deepmerge", "lodash.get", "@emotion/react", "@emotion/is-prop-valid", "@emotion/memoize", "@lecstor/ui-default-theme", "@styled-system/css", "react", "react-icons/fa", "styled-system"],
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: "cjs",
        format: "cjs",
        sourcemap: true,
        sourcemapExcludeSources: true,
        // preserveModules: true,
        // preserveModulesRoot: 'src'
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({
        outDir: "cjs",
        rootDir: "src",
        exclude: ["**/*.test.*", "test/**/*"],
        tsBuildInfoFile: "cjs/tsconfig.tsbuildinfo",
      }),
    ],
    external: ["tslib", "deepmerge", "lodash.get", "@emotion/react", "@emotion/is-prop-valid", "@emotion/memoize", "@lecstor/ui-default-theme", "@styled-system/css", "react", "react-icons/fa", "styled-system"],
  },
  // {
  //   input: "dist/es/index.d.ts",
  //   output: [{ file: "dist/esm/index.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
];
