import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    mainColor: "Primary",
    size: "Standard",
    category: "Solid",
  },
  argTypes: {
    disabled: {
    control: "boolean",
    },
    mainColor: {
      control: "select",
    },
    category: {
      control: "select",
    },
  },
} satisfies Meta<typeof Button>; // look up generic types

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    mainColor: "Primary",
    category: "Solid",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    mainColor: "Secondary",
    category: "Solid",
  },
};

export const AccentGold: Story = {
    args: {
      children: "Button",
      category: "Solid",
      mainColor: "Accent"
    },
  };

export const Outline: Story = {
  args: {
    children: "Button",
    category: "Outline",
  },
};

export const Unstyled: Story = {
  args: {
    children: "Button",
    category: "Unstyled",
  },
};

export const sizeBig: Story = {
    args: {
      children: "Button",
      category: "Solid",
      size: "Big",
    },
  };
