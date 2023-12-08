"use client";

import { Tabs } from "./_components/Tabs/Tabs";

const App = () => {
  const contents = [
    { value: "TabA", content: "TabA の中身だよ" },
    { value: "TabB", content: "TabB の中身だよ" },
    { value: "TabC", content: "TabC の中身だよ" },
  ];
  return (
    <Tabs>
      <Tabs.Trigger value="TabA">TabA</Tabs.Trigger>
      <Tabs.Trigger value="TabB">TabB</Tabs.Trigger>
      <Tabs.Trigger value="TabC">TabC</Tabs.Trigger>
      {contents.map(({ value, content }) => (
        <Tabs.Content value={value}>{content}</Tabs.Content>
      ))}
    </Tabs>
  );
};

export default App;
