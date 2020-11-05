https://medium.com/@jakeginnivan/a-great-typescript-npm-module-mono-repo-setup-e737937210


To add dependencies to this root project you need to specify the -W flag when adding the dependency.

```sh
yarn add typescript -W
```

### package/tsconfig.json

- project references so TypeScript knows to build the referenced packages before this one
- typescript path mapping allows you to use the absolute package name in imports from that dependent package

# Committing changes

```
% yarn changeset
% yarn changeset version
% git commit -m "mt commit message"
```

https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697

# TODO

## Storybook - global or scoped to package?

in `.storybook/preview.js` this doesn't feel right

```
import { UIProvider } from '../packages/react/src/theme';
```