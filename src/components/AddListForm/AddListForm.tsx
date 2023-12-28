import clsx from "clsx";
import s from "./styles.module.scss";

import { useState } from "react";

type Props = {
  setNewList: (listName: string) => void;
};

export const AddListForm = ({ setNewList }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [listName, setListName] = useState("");

  const showForm = () => {
    setIsShow(true);
  };

  const addNewList = () => {
    if (!listName) {
      setIsShow(false);
      return;
    }

    setNewList(listName);

    setListName("");
    setIsShow(false);
  };

  const cancel = () => {
    setIsShow(false);
  };

  return (
    <div>
      {isShow ? (
        <div>
          <input
            placeholder="リストのタイトルを入力..."
            value={listName}
            onChange={(e) => setListName(e.currentTarget.value)}
          />
          <div>
            <button onClick={addNewList}>リストを追加</button>
            <button onClick={cancel}>×</button>
          </div>
        </div>
      ) : (
        <button onClick={showForm}>+ リストを追加</button>
      )}
    </div>
  );
};
