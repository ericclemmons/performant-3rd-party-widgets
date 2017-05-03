import { camelCase } from "lodash";
import chat from "./chat";
import hello from "./hello";

const widgets = { chat, hello };

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

  const render = widgets[myWidget];

  render(props, container);
}
