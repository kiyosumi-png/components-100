import s from "./styles.module.scss";
import { MdClose } from "react-icons/md";

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
        <div className={s.form}>
          <input
            className={s.inputField}
            placeholder="リストのタイトルを入力..."
            value={listName}
            onChange={(e) => setListName(e.currentTarget.value)}
          />
          <div className={s.actionButtons}>
            <button className={s.confirm} onClick={addNewList}>
              リストを追加
            </button>
            <button className={s.cancel} onClick={cancel}>
              <span>
                <MdClose />
              </span>
            </button>
          </div>
        </div>
      ) : (
        <button className={s.button} onClick={showForm}>
          + リストを追加
        </button>
      )}
    </div>
  );
};
