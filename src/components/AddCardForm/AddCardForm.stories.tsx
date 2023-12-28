import type { Meta, StoryObj } from "@storybook/react";

import { AddCardForm } from "./AddCardForm";

const meta = {
  component: AddCardForm,
} satisfies Meta<typeof AddCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    listKey: "",
    setNewCard: () => null,
  },
};
