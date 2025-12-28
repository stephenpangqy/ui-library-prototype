import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AppInputField } from "./AppInputField";

// If you have @ant-design/icons installed in the UI library repo:
import { SearchOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";

const meta: Meta<typeof AppInputField> = {
  title: "Components/AppInputField",
  component: AppInputField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "borderless"],
    },
    status: {
      control: "select",
      options: [null, "error", "warning"],
    },
    placeholder: { control: "text" },
    defaultText: { control: "text" },
    prefixIcon: { control: false },
    suffixIcon: { control: false },
  },
  args: {
    variant: "default",
    placeholder: "Type something...",
    status: null,
    defaultText: "",
  },
};

export default meta;
type Story = StoryObj<typeof AppInputField>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <AppInputField {...args} />
    </div>
  ),
};

export const WithPrefixIcon: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <AppInputField {...args} prefixIcon={<UserOutlined />} placeholder="Username" />
    </div>
  ),
};

export const WithSuffixIcon: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <AppInputField {...args} suffixIcon={<SearchOutlined />} placeholder="Search..." />
    </div>
  ),
};

export const WithBothIcons: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <AppInputField
        {...args}
        prefixIcon={<UserOutlined />}
        suffixIcon={<SearchOutlined />}
        placeholder="Search user..."
      />
    </div>
  ),
};

export const FilledVariant: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <AppInputField variant="filled" placeholder="Filled variant" />
    </div>
  ),
};

export const BorderlessVariant: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <AppInputField variant="borderless" placeholder="Borderless variant" />
    </div>
  ),
};

export const ErrorStatus: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <AppInputField
        status="error"
        placeholder="This is an error state"
        suffixIcon={<WarningOutlined />}
      />
    </div>
  ),
};

export const WarningStatus: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <AppInputField
        status="warning"
        placeholder="This is a warning state"
        suffixIcon={<WarningOutlined />}
      />
    </div>
  ),
};

export const DefaultText: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <AppInputField placeholder="Has default text" defaultText="Hello there" />
    </div>
  ),
};
