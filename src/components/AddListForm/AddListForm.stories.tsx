import type { Meta, StoryObj } from "@storybook/react";

import { AddListForm } from "./AddListForm";

const meta = {
  component: AddListForm,
} satisfies Meta<typeof AddListForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setNewList: () => null,
  },
};
