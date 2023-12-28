"use client";

import { AddListForm } from "@/components/AddListForm/AddListForm";
import { List } from "@/components/List/List";
import { TBoard, TCard, boardData } from "@/data/board";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Board = () => {
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
      {Object.entries(board).map(([listKey, { list, cards }]) => (
        <List
          key={listKey}
          id={list.id}
          name={list.name}
          cards={cards}
          handleSetNewCard={handleSetNewCard}
          updateList={updateList}
        />
      ))}
      <AddListForm setNewList={handleSetNewList} />
    </div>
  );
};

function App() {
  return <Board />;
}

export default App;
