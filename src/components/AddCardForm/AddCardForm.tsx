import clsx from "clsx";
import s from "./styles.module.scss";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

type Props = {
  listKey: string;
  setNewCard: (cardName: string, listKey: string) => void;
  className?: string;
};

export const AddCardForm = ({ listKey, setNewCard, className }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [cardName, setCardName] = useState("");

  const showForm = () => {
    setIsShow(true);
  };
  const cancel = () => {
    setIsShow(false);
  };

  const addNewCard = () => {
    if (!cardName) {
      setIsShow(false);
      return;
    }

    setNewCard(cardName, listKey);

    setCardName("");
    setIsShow(false);
  };

  return (
    <div className={clsx(s, className)}>
      {isShow ? (
        <div className={s.form}>
          <input
            className={s.inputField}
            placeholder="カードのタイトルを入力..."
            value={cardName}
            onChange={(e) => setCardName(e.currentTarget.value)}
          />
          <div className={s.actionButtons}>
            <button className={s.confirm} onClick={addNewCard}>
              カードを追加
            </button>
            <button className={s.cancel} onClick={cancel}>
              ×
            </button>
          </div>
        </div>
      ) : (
        <button className={s.button} onClick={showForm}>
          <span className={s.icon}>
            <MdAdd />
          </span>
          カードを追加
        </button>
      )}
    </div>
  );
};
