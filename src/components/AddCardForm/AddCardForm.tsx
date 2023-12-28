import clsx from "clsx";
import s from "./styles.module.scss";
import { useState } from "react";

type Props = {
  listKey: string;
  setNewCard: (cardName: string, listKey: string) => void;
};

export const AddCardForm = ({ listKey, setNewCard }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [cardName, setCardName] = useState("");

  const showForm = () => {
    setIsShow(true);
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

  const cancel = () => {
    setIsShow(false);
  };

  return (
    <div>
      {isShow ? (
        <div>
          <input
            placeholder="カードのタイトルを入力..."
            value={cardName}
            onChange={(e) => setCardName(e.currentTarget.value)}
          />
          <div>
            <button onClick={addNewCard}>カードを追加</button>
            <button onClick={cancel}>×</button>
          </div>
        </div>
      ) : (
        <button onClick={showForm}>+ カードを追加</button>
      )}
    </div>
  );
};
