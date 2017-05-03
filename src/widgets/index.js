import { camelCase } from "lodash";

(async () => {
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

    // Attempt to import widget init script, or throw exception		+  const render = widgets[myWidget];
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
