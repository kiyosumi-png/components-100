"use client";

import { AddCardForm } from "@/components/AddCardForm/AddCardForm";
import { AddListForm } from "@/components/AddListForm/AddListForm";
import { Card } from "@/components/Card/Card";
import { TBoard, TCard, boardData } from "@/data/board";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { v4 as uuidv4 } from "uuid";
import s from "./page.module.scss";

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

  const handleSetNewList = (listName: string) => {
    const newListId = uuidv4();

    setBoard((prevBoard) => ({
      ...prevBoard,
      [newListId]: { list: { id: newListId, name: listName }, cards: [] },
    }));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Object.entries(board).map(([listKey, item]) => (
        <div key={listKey} className={s.list}>
          <p className={s.listName}>{item.list.name}</p>
          <ReactSortable
            key={listKey}
            list={item.cards}
            setList={(newCards) => updateList(listKey, newCards)}
            group="shared"
            className={s.cards}
          >
            {item.cards.map((card) => (
              <Card key={card.id} name={card.name} />
            ))}
          </ReactSortable>
          <AddCardForm listKey={listKey} setNewCard={handleSetNewCard} />
        </div>
      ))}
      <AddListForm setNewList={handleSetNewList} />
    </div>
  );
}

function App() {
  return <Board />;
}

export default App;
