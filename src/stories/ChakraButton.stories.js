import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <Button backgroundColor="green" onClick={action("Click Handler")}>
    Success
  </Button>
);

export const Danger = () => (
  <Button backgroundColor="red" {...actions("onClick", "onMouseOver")}>
    Danger
  </Button>
);

export const Log = () => (
  <Button
    backgroundColor="gray"
    onClick={() => console.log("Button Clicked", process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
);
