import InputField from "@/components/inputField/InputField";
import { CREATE_ROOM_INPUT_FIELD_ERROR } from "@/constants/inputField";
import { CREATE_ROOM_REGEX } from "@/constants/regex";
import { Meta, StoryObj } from "@storybook/react";
import { FaSmile } from "react-icons/fa";

const meta: Meta<typeof InputField> = {
  title: "Atoms/InputField",
  component: InputField,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Auth: Story = {
  args: {
    inputfield: {
      icon: <FaSmile />,
      name: "닉네임",
      placeholder: "2-10자 이내로 입력해주세요"
    },
    schema: "auth",
    disabled: false
  },
  argTypes: {
    schema: {
      control: "radio",
      options: ["auth", "room"]
    }
  }
};

export const Room: Story = {
  args: {
    inputfield: {
      name: "방 제목",
      field: "roomTitle",
      placeholder: "20자 이내",
      message: CREATE_ROOM_INPUT_FIELD_ERROR.roomTitle,
      regex: CREATE_ROOM_REGEX.roomTitle
    },
    schema: "room",
    disabled: false
  },
  argTypes: {
    schema: {
      control: "radio",
      options: ["auth", "room"]
    }
  }
};
