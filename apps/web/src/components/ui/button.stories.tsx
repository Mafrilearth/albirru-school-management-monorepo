import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
      description: "Visual styling variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon"],
      description: "Size dimensions and padding scale",
    },
    disabled: {
      control: "boolean",
      description: "Interactive disabled state",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button Action",
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Primary Action",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Option",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Record",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Action",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Action",
  },
};

export const LinkVariant: Story = {
  args: {
    variant: "link",
    children: "Link Action",
  },
};

export const InteractiveClick: Story = {
  args: {
    children: "Click Me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /click me/i });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};
