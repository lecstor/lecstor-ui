---
"@lecstor/ui-react": patch
---

Refactor theme usage

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
