---
to: src/components/<%= name %>/<%= name %>.tsx
---

import clsx from "clsx";
import s from "./styles.module.scss";

type Props = {};

export const <%= name %> = ({}: Props) => {
  return <div><%= name %> component</div>;
};
