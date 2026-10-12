import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      description: "Visual styling variant of the badge",
    },
  },
  args: {
    children: "Status Badge",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Active Enrolled",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Draft Review",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Suspended",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Academic Term 2026/2027",
  },
};
