import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Task 1",
  },
};
