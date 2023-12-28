import clsx from "clsx";
import s from "./styles.module.scss";

type Props = {
  name: string;
};

export const Card = ({ name }: Props) => {
  return <li>{name}</li>;
};
