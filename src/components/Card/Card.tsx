import s from "./styles.module.scss";

type Props = {
  name: string;
};

export const Card = ({ name }: Props) => {
  return <li className={s.card}>{name}</li>;
};
