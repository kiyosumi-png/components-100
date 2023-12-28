import clsx from "clsx";
import s from "./styles.module.scss";

import { ReactSortable } from "react-sortablejs";
import { TCard } from "@/data/board";
import { AddCardForm } from "../AddCardForm/AddCardForm";

type Props = {
  id: string;
  name: string;
  cards: TCard[];
  handleSetNewCard: (cardName: string, listKey: string) => void;
  updateList: (key: string, newCards: TCard[]) => void;
};

export const List = ({
  id,
  name,
  cards,
  handleSetNewCard,
  updateList,
}: Props) => {
  return (
    <div>
      <p>{name}</p>
      <ReactSortable
        list={cards}
        setList={(newCards) => updateList(id, newCards)}
        group="shared"
      >
        {cards.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ReactSortable>
      <AddCardForm listKey={id} setNewCard={handleSetNewCard} />
    </div>
  );
};
