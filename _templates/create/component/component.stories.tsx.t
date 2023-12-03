---
to: src/app/_components/<%= name %>/<%= name %>.stories.tsx
---

import type { Meta, StoryObj } from "@storybook/react";

import { <%= name %> } from "./<%= name %>";

const meta = {
  component: <%= name %>,
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
