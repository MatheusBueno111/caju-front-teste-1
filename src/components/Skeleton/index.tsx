import * as S from "./styles";

interface SkeletonProps {
  quantity: number;
  width?: string;
  height?: string;
}

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
