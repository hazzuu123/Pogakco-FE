import Profile from "@/components/profile/Profile";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Profile> = {
  title: "ATOMS/Profile",
  component: Profile,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium", "small"]
    },
    url: { control: "text" },
    onClick: { action: "clicked" }
  }
};

export default meta;
type Story = StoryObj<typeof Profile>;

// 기본 프로필 (이미지 없음)
export const DefaultLarge: Story = {
  args: {
    size: "large"
  }
};

export const DefaultMedium: Story = {
  args: {
    size: "medium"
  }
};

export const DefaultSmall: Story = {
  args: {
    size: "small"
  }
};

// 이미지가 있는 프로필
export const WithImageLarge: Story = {
  args: {
    size: "large",
    url: "https://picsum.photos/300/300"
  }
};

export const WithImageMedium: Story = {
  args: {
    size: "medium",
    url: "https://picsum.photos/300/300"
  }
};

export const WithImageSmall: Story = {
  args: {
    size: "small",
    url: "https://picsum.photos/300/300"
  }
};
