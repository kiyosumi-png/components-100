"use client";

import { TBoard, TCard, boardData } from "@/data/board";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { v4 as uuidv4 } from "uuid";

type AddCardFormProps = {
  listKey: string;
  setBoard: React.Dispatch<React.SetStateAction<TBoard>>;
};

const AddCardForm = ({ listKey, setBoard }: AddCardFormProps) => {
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

    setBoard((prevBoard) => ({
      ...prevBoard,
      [listKey]: {
        ...prevBoard[listKey],
        cards: [...prevBoard[listKey].cards, { id: uuidv4(), name: cardName }],
      },
    }));

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

type AddListFormProps = {
  setBoard: React.Dispatch<React.SetStateAction<TBoard>>;
};

const AddListForm = ({ setBoard }: AddListFormProps) => {
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

    const newListId = uuidv4();

    setBoard((prevBoard) => ({
      ...prevBoard,
      [newListId]: { list: { id: newListId, name: listName }, cards: [] },
    }));

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

function Board() {
  const [board, setBoard] = useState<TBoard>(boardData);

  const updateList = (key: string, newItems: TCard[]) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      [key]: { ...prevBoard[key], cards: newItems },
    }));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Object.entries(board).map(([key, item]) => (
        <div key={key}>
          <p>{item.list.name}</p>
          <ReactSortable
            list={item.cards}
            setList={(newItems) => updateList(key, newItems)}
            group="shared"
          >
            {item.cards.map((card) => (
              <li key={card.id}>{card.name}</li>
            ))}
          </ReactSortable>
          <AddCardForm listKey={key} setBoard={setBoard} />
        </div>
      ))}
      <AddListForm setBoard={setBoard} />
    </div>
  );
}

function App() {
  return <Board />;
}

export default App;
