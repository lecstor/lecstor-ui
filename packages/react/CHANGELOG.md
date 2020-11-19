# @lecstor/ui-react

## 0.1.4

### Patch Changes

- 50eed20: Forward Refs

  - BaseButton
  - Button
  - TextInput

  Fix npm package files

  Some cleanup (remove empty hooks)

## 0.1.3

### Patch Changes

- 866859d: Refactor theme usage

  Box

  - use handleStyleProps
  - improve typing

  Button

  - make BaseButton usable as an unstyled button
  - update Button to use BaseButton
    - sets themeKey to use default variants

  Layout

  - use handleStyleProps
  - use styled-system border, grid, layout, space utils

  TextInput

  - use handleStyleProps
  - use styled-system space util

  hooks

  - remove useThemePresets

  utils

  - add handleStyleProps
    - cssFn
    - getForwardProps
    - makeGetVariants

- Updated dependencies [866859d]
  - @lecstor/ui-default-theme@0.1.2

## 0.1.2

### Patch Changes

- 78435e9: Dependency updates & misc fixes
- Updated dependencies [78435e9]
  - @lecstor/ui-default-theme@0.1.1

## 0.1.1

### Patch Changes

- 189c9c5: Set up utils package for release

## 0.1.0

### Minor Changes

- b147ec2: # Autmated changesets release test 1

  Releasing directory structure changes to the the react package which were committed earlier..

### Patch Changes

- Updated dependencies [b147ec2]
  - @lecstor/ui-default-theme@0.1.0

## 0.0.1

### Patch Changes

- initial monorepo setup with typescript build, storybook, and some base components
