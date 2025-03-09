import { forwardRef } from "react";
import * as S from "./styles";

interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ ...props }, ref) => {
    return <S.Overlay ref={ref} {...props} />;
  }
);
