import { forwardRef } from "react";
import * as S from "./styles";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ ...props }, ref) => {
    return <S.Content ref={ref} {...props} />;
  }
);
