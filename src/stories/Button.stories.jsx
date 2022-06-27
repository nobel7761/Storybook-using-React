//default imports here
import React from "react";
import { Button } from "./Button";
import Center from "../components/Center/Center";

//two types of export

//default export
export default {
  title: "Example/Button", //mandatory
  component: Button, // optional! importing component here
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "Args from Component",
  },
  decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => <Button {...args} />;

//named export! each named export represents a story!

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  //label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  //label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  //label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  //label: "Button",
  backgroundColor: "red",
};

export const ReuseArgsFromAnotherStory = Template.bind({});
ReuseArgsFromAnotherStory.args = {
  ...Small.args,
  label: "Args from another story",
};
