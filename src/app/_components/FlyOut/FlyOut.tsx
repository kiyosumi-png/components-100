import {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

type Props = {
  children: ReactNode;
};

const FlyOutContext = createContext<{
  open: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}>({
  open: false,
  toggle: () => {},
});

export function FlyOut({ children }: Props) {
  const [open, toggle] = useState(false);

  return (
    <FlyOutContext.Provider value={{ open, toggle }}>
      {children}
    </FlyOutContext.Provider>
  );
}

function Toggle() {
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <div onClick={() => toggle(!open)}>
      <AiOutlineEllipsis />
    </div>
  );
}

type ListProps = {
  children: ReactNode;
};

function List({ children }: ListProps) {
  const { open } = useContext(FlyOutContext);
  return open && <ul>{children}</ul>;
}

type ItemProps = {
  children: ReactNode;
};
function Item({ children }: ItemProps) {
  return <li>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
