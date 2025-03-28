import { TButtonColor, TSquareButtonSize } from "@/style/theme";
import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor: Extract<TButtonColor, "default" | "active" | "delete">;
  buttonSize: TSquareButtonSize;
  children: React.ReactNode;
}
const SquareButton = ({
  buttonColor,
  buttonSize,
  children,
  ...props
}: Props) => {
  return (
    <SquareButtonStyle
      $buttonColor={buttonColor}
      $buttonSize={buttonSize}
      disabled={props.disabled}
      {...props}
    >
      <h1>{children}</h1>
    </SquareButtonStyle>
  );
};

interface SquareButtonStyleProps {
  $buttonColor: TButtonColor;
  $buttonSize: TSquareButtonSize;
  disabled?: boolean;
}
export const SquareButtonStyle = styled.button<SquareButtonStyleProps>`
  transition: all 0.2s;
  color: ${({ theme, $buttonColor }) => theme.buttonColor[$buttonColor].color};
  background-color: ${({ theme, $buttonColor }) =>
    theme.buttonColor[$buttonColor].background};
  border: 1px solid
    ${({ theme, $buttonColor }) => theme.buttonColor[$buttonColor].stroke};

  width: ${({ theme, $buttonSize }) =>
    theme.squareButtonSize[$buttonSize].width};
  height: ${({ theme, $buttonSize }) =>
    theme.squareButtonSize[$buttonSize].height};
  border-radius: ${({ theme, $buttonSize }) =>
    theme.squareButtonSize[$buttonSize].borderRadius};

  h1 {
    font-weight: ${({ theme, $buttonSize }) =>
      theme.squareButtonSize[$buttonSize].fontWeight};
    font-size: ${({ theme, $buttonSize }) =>
      theme.squareButtonSize[$buttonSize].fontSize};
  }

  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};

  &:hover {
    color: ${({ theme, $buttonColor, disabled }) =>
      disabled
        ? theme.buttonColor[$buttonColor].color
        : theme.buttonColor[`${$buttonColor}Hover`]?.color ||
          theme.buttonColor[$buttonColor].color};
    background-color: ${({ theme, $buttonColor, disabled }) =>
      disabled
        ? theme.buttonColor[$buttonColor].background
        : theme.buttonColor[`${$buttonColor}Hover`]?.background ||
          theme.buttonColor[$buttonColor].background};
    border: 1px solid
      ${({ theme, $buttonColor, disabled }) =>
        disabled
          ? theme.buttonColor[$buttonColor].stroke
          : theme.buttonColor[`${$buttonColor}Hover`]?.stroke ||
            theme.buttonColor[$buttonColor].stroke};
  }
`;

export default SquareButton;
