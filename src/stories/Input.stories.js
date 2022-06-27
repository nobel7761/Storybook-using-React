import React from "react";
import Input from "./input";

export default {
  title: "Example/Input", //mandatory
  component: Input, // optional! importing component here
};

const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "email",
};
export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "text",
};
export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "number",
};

Email.storyName = "Email Input";
