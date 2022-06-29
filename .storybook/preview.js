import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
/* import Center from "../src/components/Center/Center"; */

import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import { withConsole } from "@storybook/addon-console";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

// addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
];

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
  viewport: {
    viewport: INITIAL_VIEWPORTS,
  },
});
addDecorator(withA11y);
