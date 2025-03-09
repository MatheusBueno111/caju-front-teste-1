import { forwardRef } from "react";
import * as S from "./styles";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ ...props }, ref) => {
    return <S.Header ref={ref} {...props} />;
  }
);
