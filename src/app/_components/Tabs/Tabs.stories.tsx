import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "",
  },
  render: () => {
    const contents = ["TabA", "TabB", "TabC"];
    return (
      <Tabs>
        <Tabs.Trigger value="TabA">TabA</Tabs.Trigger>
        <Tabs.Trigger value="TabB">TabB</Tabs.Trigger>
        <Tabs.Trigger value="TabC">TabC</Tabs.Trigger>
        {contents.map((content) => (
          <Tabs.Content value={content}>{content}</Tabs.Content>
        ))}
      </Tabs>
    );
  },
};
