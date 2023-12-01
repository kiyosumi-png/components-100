import clsx from "clsx";
import s from "./styles.module.scss";

type Props = {
  children: string;
  type: "primary" | "secondary";
  weight?: "normal" | "bold";
  size: "small" | "medium" | "large";
  className?: string;
};

export const Button = ({
  children,
  type,
  size,
  weight = "normal",
  className,
}: Props) => {
  return (
    <button className={clsx(s.root, s[type], s[size], s[weight], className)}>
      {children}
    </button>
  );
};
