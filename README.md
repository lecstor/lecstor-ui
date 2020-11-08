
### package/tsconfig.json

- project references so TypeScript knows to build the referenced packages before this one
- typescript path mapping allows you to use the absolute package name in imports from that dependent package

# Committing changes

```
% yarn changeset
% git commit -m "add changeset"
```

# Yarn

We use Yarn 2 to manage this repository

To update to the latet version `yarn set version latest`

# TODO

## Storybook - global or scoped to package?

in `.storybook/preview.js` this doesn't feel right

```
import { UIProvider } from '../packages/react/src/theme';
```

# References

- [Publishing packages to GitHub Packages](https://docs.github.com/en/free-pro-team@latest/actions/guides/publishing-nodejs-packages#publishing-packages-to-github-packages)
- https://medium.com/@jakeginnivan/a-great-typescript-npm-module-mono-repo-setup-e737937210
- https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697
