import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import { rollupIsExternal } from "../../build/rollupIsExternal";

const isExternal = rollupIsExternal();

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
        preserveModulesRoot: "src",
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
    external: isExternal,
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: "cjs",
        format: "cjs",
        sourcemap: true,
        sourcemapExcludeSources: true,
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
    external: isExternal,
  },
];
