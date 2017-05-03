# Performant 3rd Party Widgets

> https://www.meetup.com/houston-js/events/239147131/

## Demo

![Demo](demo.gif)

## Features

## Tools

- [ ] Chrome DevTools
- [ ] `webpack-bundle-analyzer`
- [ ] GZip Plugin

### Building
- [ ] NODE_ENV=production + UglifyJS
- [ ] External Sourcemaps
- [ ] Code-splitting

### Bundle optimization
- [ ] `react` to `preact`
- [ ] `babel-lodash`
  - [ ] Applies to `recompose`, too.
- [ ] `lodash-webpack-plugin`

### CSS-in-JS
- [ ] Example for when styles are generated at runtime
- [ ] `styled-components`  + costs
- [ ] `glamour` + costs
- [ ] Other examples (+ costs)?

### Gotchas
- [ ] CSS specificity
- [ ] Multiple instances
- [ ] `__webpack_public_path__`
- [ ] `loose: true` breaks with [...NodeList]
