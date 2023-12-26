"use client";

import { TBoard, TCard, boardData } from "@/data/board";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { v4 as uuidv4 } from "uuid";

function Board() {
  const [board, setBoard] = useState<TBoard>(boardData);

  const updateList = (key: string, newItems: TCard[]) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      [key]: { ...prevBoard[key], cards: newItems },
    }));
  };

  const addCard = (listKey: string, name: string) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      [listKey]: {
        ...prevBoard[listKey],
        cards: [...prevBoard[listKey].cards, { id: uuidv4(), name }],
      },
    }));
  };

  const addList = (name: string) => {
    const newListId = uuidv4();

    setBoard((prevBoard) => ({
      ...prevBoard,
      [newListId]: { list: { id: newListId, name }, cards: [] },
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
          <button onClick={() => addCard(key, "hoge")}>+ カードを追加</button>
        </div>
      ))}
      <button onClick={() => addList("hoge")}>+ もう一つリストを追加</button>
    </div>
  );
}

function App() {
  return <Board />;
}

export default App;
