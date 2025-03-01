import * as S from "./styles";
import { SkeletonProps } from "./types";

export const Skeleton: React.FC<SkeletonProps> = ({
  quantity,
  width,
  height,
}) => {
  return (
    <S.Container>
      {Array.from({ length: quantity }).map((_, index) => (
        <S.Skeleton key={index} width={width} height={height} />
      ))}
    </S.Container>
  );
};
