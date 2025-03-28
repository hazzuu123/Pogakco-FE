import SquareButton from "@/components/buttons/SquareButton";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof SquareButton> = {
  title: "atoms/SquareButton",
  component: SquareButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onClick: fn() }
} satisfies Meta<typeof SquareButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonColor: "default",
    buttonSize: "medium",
    children: "버튼",
    disabled: false
  },
  argTypes: {
    buttonSize: {
      control: "radio",
      options: ["large", "medium", "small"]
    },
    buttonColor: {
      control: "radio",
      options: ["default", "active", "delete"]
    }
  }
};
