import s from "./styles.module.scss";
import { Button } from "../Button/Button";

type Props = {};

// function validateName(name: string) {
//   const regex = ;
//   return regex.test(name);
// }

export const Form = ({}: Props) => {
  return (
    <form className={s.root}>
      <div className={s.content}>
        <label>First name</label>
        <input pattern="/^[\p{L}]{1,50}$/u} /" />
      </div>
      <div className={s.content}>
        <label>Last name</label>
        <input />
      </div>
      <div className={s.content}>
        <label>Email address</label>
        <input />
      </div>
      <div className={s.content}>
        <label>Password</label>
        <input />
      </div>
      <Button size="medium" type="primary" className={s.submit}>
        Sign up
      </Button>
    </form>
  );
};
