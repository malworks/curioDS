import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
    args: {
		children: 'Button',
		variant: 'Primary',
		size: 'Standard',
		type: 'Solid',
	},
	argTypes: {
		disabled: { 
			control: 'boolean',
		},
		variant: {
			control: 'select',
		},
		type: { 
			control: 'select',
		},
	},
} satisfies Meta;

export default meta;

export const Primary: Story = {
	args: {
		children: 'Button',
		variant: 'Primary',
		type: 'Filled',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
		variant: 'Secondary',
		type: 'Solid',
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
			type: 'Outline',
	},
};

export const Unstyled: Story = {
	args: {
		children: 'Button',
		type: 'Unstyled',
	},
};