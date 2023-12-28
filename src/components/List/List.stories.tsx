import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import { boardData } from "@/data/board";

const meta = {
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "",
    name: "list-1",
    cards: boardData["e1614d1a-86a0-42c0-a356-262587365add"].cards,
    handleSetNewCard: () => null,
    updateList: () => null,
  },
};
