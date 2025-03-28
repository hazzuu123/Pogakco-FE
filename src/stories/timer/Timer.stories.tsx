import Timer from "@/components/timer/Timer";
import { SOCKET_TIMER_STATUS } from "@/constants/socket";
import { light } from "@/style/theme";
import type { Meta, StoryObj } from "@storybook/react";
import "react-circular-progressbar/dist/styles.css";
import { ThemeProvider } from "styled-components";

/**
 * `Timer` 컴포넌트는 뽀모도로 타이머의 상태를 시각적으로 표시하는 컴포넌트입니다.
 * 집중 시간, 휴식 시간, 긴 휴식 시간 등 다양한 상태를 원형 프로그레스 바로 표시합니다.
 */
const meta: Meta<typeof Timer> = {
  title: "Components/Timer",
  component: Timer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "뽀모도로 타이머의 상태를 시각적으로 표시하는 컴포넌트입니다. 상태에 따라 다른 색상과 메시지를 표시합니다."
      }
    }
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={light}>
        <div style={{ width: "335px", height: "335px" }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Timer>;

// 샘플 roomData
const sampleRoomData = {
  id: 1,
  roomTitle: "Sample Room",
  roomDescription: "Sample Description",
  totalCycles: 4,
  currentCycles: 1,
  focusTime: 25,
  startedAt: new Date().toISOString(),
  shortBreakTime: 5,
  longBreakTime: 15,
  isRunning: true,
  maxParticipants: 10,
  currentParticipants: 1,
  ownerName: "Sample Owner"
};

/**
 * 집중 시간 상태의 타이머입니다.
 */
export const FocusTime: Story = {
  args: {
    timerTime: 1200, // 20분
    status: SOCKET_TIMER_STATUS.FOCUS_TIME,
    roomData: sampleRoomData
  }
};

/**
 * 짧은 휴식 시간 상태의 타이머입니다.
 */
export const ShortBreakTime: Story = {
  args: {
    timerTime: 300, // 5분
    status: SOCKET_TIMER_STATUS.SHORT_BREAK_TIME,
    roomData: sampleRoomData
  }
};

/**
 * 긴 휴식 시간 상태의 타이머입니다.
 */
export const LongBreakTime: Story = {
  args: {
    timerTime: 600, //  10분
    status: SOCKET_TIMER_STATUS.LONG_BREAK_TIME,
    roomData: sampleRoomData
  }
};

/**
 * 초기 설정 상태의 타이머입니다.
 */
export const SetTime: Story = {
  args: {
    timerTime: 1500, // 25분
    status: SOCKET_TIMER_STATUS.SET,
    roomData: sampleRoomData
  }
};

/**
 * 종료 상태의 타이머입니다.
 */
export const EndTime: Story = {
  args: {
    timerTime: 0,
    status: SOCKET_TIMER_STATUS.END,
    roomData: sampleRoomData
  }
};
