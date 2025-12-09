// src/Input.tsx
import React, { type CSSProperties } from "react";
import {
  Input as AntInput,
  type InputProps as AntInputProps
} from "antd";

export interface AppInputProps extends AntInputProps {
  fullWidth?: boolean;
}

export const AppInput: React.FC<AppInputProps> = ({
  fullWidth = true,
  style,
  ...rest
}) => {
  const baseStyle: CSSProperties = {
    borderRadius: 4
  };

  const widthStyle: CSSProperties = fullWidth ? { width: "100%" } : {};

  return (
    <AntInput
      style={{
        ...baseStyle,
        ...widthStyle,
        ...style
      }}
      {...rest}
    />
  );
};
