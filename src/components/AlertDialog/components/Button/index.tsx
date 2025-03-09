import { forwardRef } from "react";
import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "confirm" | "cancel" | "close" | "back";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "confirm", ...props }, ref) => {
    return <S.Button ref={ref} variant={variant} {...props} />;
  }
);
