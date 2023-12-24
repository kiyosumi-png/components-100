"use client";

import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const boardData = {
  "list-1": [
    { id: "0", name: "list1-Task1" },
    { id: "1", name: "list1-Task2" },
    { id: "2", name: "list1-Task3" },
  ],
  "list-2": [
    { id: "3", name: "list2-Task1" },
    { id: "4", name: "list2-Task2" },
    { id: "5", name: "list2-Task3" },
  ],
  "list-3": [
    { id: "6", name: "list3-Task1" },
    { id: "7", name: "list3-Task2" },
    { id: "8", name: "list3-Task3" },
  ],
};

function Board() {
  const [board, setBoard] = useState(boardData);

  const updateList = (
    key: string,
    newItems: { id: string; name: string }[]
  ) => {
    setBoard((prevBoard) => ({ ...prevBoard, [key]: newItems }));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Object.entries(board).map(([key, items]) => (
        <ReactSortable
          key={key}
          list={items}
          setList={(newItems) => updateList(key, newItems)}
          group="shared"
        >
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ReactSortable>
      ))}
    </div>
  );
}

// function Board() {
//   const states = Object.values(board).map((list) => useState(list));

//   return (
//     <>
//       {Object.entries(board).map(([key, value], i) => (
//         <ul>
//           <ReactSortable list={states[i][0]} setList={states[i][1]} group={key}>
//             {states[i][0].map((item) => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ReactSortable>
//         </ul>
//       ))}
//     </>
//   );
// }

function App() {
  return <Board />;
}

export default App;
