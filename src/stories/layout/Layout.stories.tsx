import Layout from "@/components/layout/Layout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Layout> = {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 페이지 레이아웃 입니다 */
export const Default: Story = {
  args: {
    children: <></>
  }
};
