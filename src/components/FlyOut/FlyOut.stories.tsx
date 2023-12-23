import type { Meta, StoryObj } from "@storybook/react";

import { FlyOut } from "./FlyOut";

const meta = {
  component: FlyOut,
} satisfies Meta<typeof FlyOut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <FlyOut.Toggle />,
  },
};
