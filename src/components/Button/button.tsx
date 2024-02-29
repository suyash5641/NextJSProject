import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}
export const Button = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} data-testid="button-test">
      button
    </button>
  );
};
