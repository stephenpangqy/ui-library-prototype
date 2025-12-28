import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";

export type AppInputVariant = "default" | "filled" | "borderless";
export type AppInputStatus = "error" | "warning" | null;

export interface AppInputFieldProps
  extends Omit<
    InputProps,
    "variant" | "status" | "prefix" | "suffix" | "placeholder" | "defaultValue"
  > {
  /** Visual style variant */
  variant?: AppInputVariant;

  /** Optional icons/elements */
  prefixIcon?: React.ReactNode | null;
  suffixIcon?: React.ReactNode | null;

  /** Placeholder text */
  placeholder?: string;

  /** Validation status */
  status?: AppInputStatus;

  /** Uncontrolled default text (maps to AntD Input defaultValue) */
  defaultText?: string;
}

export const AppInputField: React.FC<AppInputFieldProps> = ({
  variant = "default",
  prefixIcon = null,
  suffixIcon = null,
  placeholder,
  status = null,
  defaultText,
  ...rest
}) => {
  return (
    <Input
      {...rest}
      variant={variant}
      prefix={prefixIcon ?? undefined}
      suffix={suffixIcon ?? undefined}
      placeholder={placeholder}
      status={status ?? undefined}
      defaultValue={defaultText}
    />
  );
};
