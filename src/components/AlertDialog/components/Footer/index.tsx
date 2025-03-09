import { forwardRef } from "react";
import * as S from "./styles";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ ...props }, ref) => {
    return <S.Footer ref={ref} {...props} />;
  }
);
