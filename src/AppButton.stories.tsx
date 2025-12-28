import type { Meta, StoryObj } from "@storybook/react";
import { AppButton } from "./AppButton";

const meta: Meta<typeof AppButton> = {
  title: "Components/AppButton",
  component: AppButton,
  parameters: {
    docs: {
      description: {
        component: "Shared Ant Design button with library defaults + overrides."
      }
    }
  },
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary"] },
    customColor: { control: "color" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    children: { control: "text" }
  },
  args: {
    variant: "primary",
    children: "Click me"
  }
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Playground: Story = {
  parameters: {
    docs: {
      source: {
        code:
`import { AppButton } from "@stephen-pang/ui";

export function Example() {
  return (
    <AppButton variant="primary" customColor="#fa541c">
      Click me
    </AppButton>
  );
}`
      }
    }
  }
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" }
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" }
};
