import React, { type CSSProperties } from "react";
import { Button as AntButton, type ButtonProps as AntButtonProps } from "antd";

export interface AppButtonProps extends AntButtonProps {
  /** Our own variants */
  customVariant?: "primary" | "secondary";
  /** Per-usage override for background/border color */
  customColor?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  customVariant = "primary",
  customColor,
  style,
  ...rest
}) => {
  const baseStyle: CSSProperties = {
    borderRadius: 4,
    fontWeight: 600
  };

  const variantStyle: CSSProperties =
    customVariant === "primary"
      ? {
          backgroundColor: "#1677ff",
          borderColor: "#1677ff",
          color: "#ffffff"
        }
      : {
          backgroundColor: "#ffffff",
          borderColor: "#1677ff",
          color: "#1677ff"
        };

  // If customColor is passed, override background + border
  const overrideColorStyle: CSSProperties | undefined = customColor
    ? { backgroundColor: customColor, borderColor: customColor }
    : undefined;

  const finalStyle: CSSProperties = {
    ...baseStyle,
    ...variantStyle,
    ...overrideColorStyle,
    ...style // caller can still override everything
  };

  return <AntButton style={finalStyle} {...rest} />;
};
