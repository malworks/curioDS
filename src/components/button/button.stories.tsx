import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

type Story = StoryObj<typeof Button>;

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    mainColor: { control: "color" },
    size: "Standard",
    type: "Solid",
  },
  argTypes: {
    disabled: {
    control: "boolean",
    },
    mainColor: {
      control: "select",
    },
    type: {
      control: "select",
    },
    tags: ["autodocs"],
  },
} satisfies Meta;

export default meta;

export const Primary: Story = {
  args: {
    children: "Button",
    mainColor: "Primary",
    type: "Filled",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    mainColor: "Secondary",
    type: "Solid",
  },
};

export const AccentGold: Story = {
    args: {
      children: "Button",
      type: "Solid",
      mainColor: "Accent"
    },
  };

export const Outline: Story = {
  args: {
    children: "Button",
    type: "Outline",
  },
};

export const Unstyled: Story = {
  args: {
    children: "Button",
    type: "Unstyled",
  },
};

export const sizeBig: Story = {
    args: {
      children: "Button",
      type: "Solid",
      size: "Big",
    },
  };
