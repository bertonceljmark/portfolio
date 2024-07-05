import { ReactNode } from "react";

interface IProps {
  condition?: boolean;
  children: ReactNode;
}

const Conditional = ({ condition, children }: IProps) => {
  return condition ? children : null;
};

export default Conditional;
