import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip";


type Story = StoryObj<typeof Chip>;


const meta = {
    title: 'Components/Chip',
    component: Chip,
    parameters: {
        layout: "centered",
      },
      args: {
        children: "Chip",
        mainColor: { control: "color" },
        type: "Solid",
      },
      argTypes: {
        mainColor: {
          control: "select",
        },
        type: {
          control: "select",
        },
        icon: {
          control: "boolean",
        },
        tags: ["autodocs"],
      },
} satisfies Meta;

export default meta;

export const Primary: Story = {
    args: {
      children: "Chip",
      mainColor: "Primary",
      type: "Solid",
      icon: "True",
    },
};

export const Secondary: Story = {
  args: {
    children: "Chip",
    mainColor: "Secondary",
    type: "Solid",
    icon: "True",
  },
};

// export const Clickable = Template.bind({});
// Clickable.args = {
//     label: 'Clickable Chip',
//     onClick: () => alert('Chip clicked!'),
// };
