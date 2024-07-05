import Image from "next/image";
import { SyntheticEvent } from "react";

interface IProps {
  size?: number;
  id: string;
  onClick?: (e: SyntheticEvent) => void;
}

const W95Icon = ({ size = 24, id, onClick }: IProps) => {
  const path = `/icons/w95/w95_${id}.ico`;

  return (
    <Image src={path} alt={id} width={size} height={size} onClick={onClick} />
  );
};

export default W95Icon;
