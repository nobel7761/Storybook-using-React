import React from "react";
import { Text } from "./Input.stories";
import { Email } from "./Input.stories";
import { Number } from "./Input.stories";
import { Primary } from "./Button.stories";

export default {
  title: "Subscription/Form",
};

export const Form = () => (
  <>
    <Text type="text" placeholder="Enter Your Name" />
    <Email type="email" placeholder="Enter Your Email" />
    <Number type="text" placeholder="Enter Your Number" />
    <Primary label="Submit" />
  </>
);
