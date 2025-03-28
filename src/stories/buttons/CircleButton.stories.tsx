import CircleButton from "@/components/buttons/CircleButton";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RiLogoutBoxRLine } from "react-icons/ri";

const meta: Meta<typeof CircleButton> = {
  title: "atoms/CircleButton",
  component: CircleButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onClick: fn() }
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveSmall: Story = {
  args: {
    buttonColor: "active",
    buttonSize: "small",
    children: "버튼"
  },
  argTypes: {
    buttonSize: {
      control: "radio",
      options: ["large", "small"]
    },
    buttonColor: {
      control: "radio",
      options: ["active", "delete"]
    }
  }
};

export const IconButton: Story = {
  args: {
    buttonColor: "active",
    buttonSize: "large"
  },
  argTypes: {
    buttonColor: {
      control: "radio",
      options: ["active", "delete"]
    }
  },
  render: (args) => (
    <CircleButton buttonColor={args.buttonColor} buttonSize={args.buttonSize}>
      <RiLogoutBoxRLine />
    </CircleButton>
  )
};
