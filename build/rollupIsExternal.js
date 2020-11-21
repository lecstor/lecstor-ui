import fs from "fs";

const moduleRegExp = (module) => new RegExp(`^${module}(\\/.+)*$`);

function getModulesMatcher(modulesNames) {
  const regexps = modulesNames.map(moduleRegExp);
  return (id) => regexps.some((regexp) => regexp.test(id));
}

export function rollupIsExternal() {
  const pkg = JSON.parse(fs.readFileSync("./package.json"));
  const deps = Object.keys(pkg.dependencies || {});
  const peerDeps = Object.keys(pkg.peerDependencies || {});

  return getModulesMatcher([...deps, ...peerDeps]);
}
