import Footer from "@/components/footer/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen" // footer는 전체 너비를 사용하므로 fullscreen으로 설정
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
