// Lazy-loaded modules are assumed on the hosting domain,
// so we override the constant at runtime.
// __webpack_public_path__ = process.env.NODE_ENV === "production"
//   ? "https://example.com"
//   : "http://localhost:3000";

import { camelCase } from "lodash";

(async () => {
  // For minority of browers, bring in heavier polyfills.
  if (!Object.assign || !Array.from || !window.location.origin) {
    await import("../polyfills");
  }

  // Iterable list of widget scripts
  const containers = [...document.querySelectorAll("[data-my-widget]")];

  for (const container of containers) {
    const options = [...container.attributes]
      .filter(({ name }) => /^data-/.test(name))
      .reduce((acc, attribute) => {
        const { name, value } = attribute;
        const prop = camelCase(name.replace(/^data-(.+$)/, "$1"));

        return {
          ...acc,
          [prop]: value
        };
      }, {});

    const { myWidget, ...props } = options;

    // Attempt to import widget init script, or throw exception
    const render = await (async () => {
      try {
        const imported = await import(`./${myWidget}.js`);

        // `import`ed code-split modules contain all exports
        return imported.default;
      } catch (e) {
        // Friendly error message for invalid widget names
        if (e.message.match("Cannot find module")) {
          throw new Error(`Unknown data-my-widget: ${myWidget}`);
        } else {
          throw e;
        }
      }
    })();

    render(props, container);
  }
})();
