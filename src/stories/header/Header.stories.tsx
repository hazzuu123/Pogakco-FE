import Header from "@/components/header/Header";
import { useAuthStore } from "@/store/authStore";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen"
  },

  tags: ["autodocs"]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  decorators: [
    (Story) => {
      useAuthStore.setState({ isLoggedIn: true });
      return <Story />;
    }
  ],
  parameters: {
    docs: {
      description: {
        story: "로그인 상태일 때는 마이페이지와 로그아웃 버튼이 표시됩니다."
      }
    }
  }
};

export const LoggedOut: Story = {
  decorators: [
    (Story) => {
      useAuthStore.setState({ isLoggedIn: false });
      return <Story />;
    }
  ],
  parameters: {
    docs: {
      description: {
        story: "로그아웃 상태일 때는 로그인 버튼이 표시됩니다."
      }
    }
  }
};
