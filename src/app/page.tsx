"use client";

import { AddCardForm } from "@/components/AddCardForm/AddCardForm";
import { TBoard, TCard, boardData } from "@/data/board";
import { useState, Dispatch, SetStateAction } from "react";
import { ReactSortable } from "react-sortablejs";
import { v4 as uuidv4 } from "uuid";

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

  const handleSetNewCard = (cardName: string, listKey: string) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      [listKey]: {
        ...prevBoard[listKey],
        cards: [...prevBoard[listKey].cards, { id: uuidv4(), name: cardName }],
      },
    }));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Object.entries(board).map(([listKey, item]) => (
        <div key={listKey}>
          <p>{item.list.name}</p>
          <ReactSortable
            list={item.cards}
            setList={(newItems) => updateList(listKey, newItems)}
            group="shared"
          >
            {item.cards.map((card) => (
              <li key={card.id}>{card.name}</li>
            ))}
          </ReactSortable>
          <AddCardForm listKey={listKey} setNewCard={handleSetNewCard} />
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
