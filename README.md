# Performant 3rd Party Widgets

> https://www.meetup.com/houston-js/events/239147131/

Why?
> https://twitter.com/addyosmani/status/846146626389389312

## Demo

![Demo](demo.gif)

## Features

## Tools

- [ ] Chrome DevTools
- [ ] `webpack-bundle-analyzer`
  > https://github.com/th0r/webpack-bundle-analyzer

- [ ] GZip Plugin
- [ ] https://chrisbateman.github.io/webpack-visualizer/
- [ ] https://hackernoon.com/optimising-your-application-bundle-size-with-webpack-e85b00bab579

### Building
- [ ] NODE_ENV=production + UglifyJS
- [ ] External Sourcemaps
- [ ] Code-splitting
  - [ ] `modules: false`
- [ ] `compression-webpack-plugin`

    ```js
    var CompressionPlugin = require('compression-webpack-plugin');

    new CompressionPlugin({
      test: /\.(html|js)$/,
    })
    ```

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
