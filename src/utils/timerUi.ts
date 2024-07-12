import { TtimerStatus } from "@/models/timer.model";
import { DefaultTheme } from "styled-components";

export const percent = (status: TtimerStatus, current: number) => {
  let total;
  switch (status) {
    case "focusTime":
      total = 25;
      return ((total - current + 1) / total) * 100;
    case "shortBreakTime":
      total = 5;
      return 100 - ((total - current + 1) / total) * 100;
    case "longBreakTime":
      total = 30;
      return ((total - current + 1) / total) * 100;
    default:
      return 0;
  }
};

export const getColorByStatus = (status: TtimerStatus, theme: DefaultTheme) => {
  switch (status) {
    case "focusTime":
      return {
        main: theme.color.pink6,
        trail: theme.color.pink1
      };

    case "shortBreakTime":
      return {
        main: theme.color.pink4,
        trail: theme.color.pink1
      };
    case "longBreakTime":
      return {
        main: theme.color.grey3,
        trail: theme.color.grey1
      };

    default:
      return {
        main: theme.color.grey2,
        trail: theme.color.grey1
      };
  }
};

export const getMessageByStatus = (status: TtimerStatus) => {
  switch (status) {
    case "focusTime":
      return "지금은 집중 시간입니다";
    case "shortBreakTime":
      return "지금은 휴식 시간입니다";
    case "longBreakTime":
      return "타이머가 곧 종료됩니다";
    default:
      return "시작버튼을 눌러주세요";
  }
};
