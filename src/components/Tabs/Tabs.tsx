import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const TabsContext = createContext<{
  selectedContent: string;
  setSelectedContent: Dispatch<SetStateAction<string>>;
}>({
  selectedContent: "",
  setSelectedContent: () => {},
});

type Props = {
  children: ReactNode;
};

export const Tabs = ({ children }: Props) => {
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <TabsContext.Provider value={{ selectedContent, setSelectedContent }}>
      {children}
    </TabsContext.Provider>
  );
};

type TriggerProps = {
  children: ReactNode;
  value: string;
};

const Trigger = ({ children, value }: TriggerProps) => {
  const { setSelectedContent } = useContext(TabsContext);

  const selectContent = () => {
    setSelectedContent(value);
  };

  return <button onClick={selectContent}>{children}</button>;
};

type ContentProps = {
  children: ReactNode;
  value: string;
};

const Content = ({ children, value }: ContentProps) => {
  const { selectedContent } = useContext(TabsContext);
  return value === selectedContent && <div>{children}</div>;
};

Tabs.Trigger = Trigger;
Tabs.Content = Content;

const App = () => {
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
};
