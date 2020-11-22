# Lecstor UI

## Contributing

```
git clone git@github.com:lecstor/lecstor-ui.git
cd lecstor-ui
yarn
yarn verify
```

- check out a new branch
- hackedy, hackedy, hack

```
yarn changeset
```

- select packages to be included in changeset
- select bump level for packages
- enter a summary for the change

A changeset file will be created which you are free to edit.

- you can create multiple changesets if you wish to add different details for different packages.
- you can continue to make code changes and edit changesets or add more changets.
- commit your changes and the changeset, push to GitHub, and create a pull request.

When your PR is merged, a new release PR will be automatically created.

You can merge more PRs and the changes will be added to the release PR.

Merging the release PR will update the versions of changed packages and the dependencies in the
`package.json` files of packages that depend on them. Packages with changes will then be deployed
to GitHub Packages.

The GitHub Actions release workflow will check pushes to the main branch and if they contain
changesets then a release PR will be created or updated, otherwise any packages with bunmped
verion from those already published will be published.

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

To update dependencies: `yarn upgrade-interactive`

To update to the latest version: `yarn set version latest`

To perform a health check: `yarn dlx @yarnpkg/doctor .`
 
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
