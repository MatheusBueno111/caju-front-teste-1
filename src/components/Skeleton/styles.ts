import styled, { keyframes } from "styled-components";

interface SkeletonProps {
  width: string;
  height: string;
}

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.5;
    background-position: -200% 0;
  }
  100% {
    opacity: 1;
    background-position: 200% 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  gap: 8px;
  border: 1px solid red;
  border-radius: 8px;
`;

export const Skeleton = styled.div<SkeletonProps>`
  background: linear-gradient(90deg, #f0f0f0 16%, #d6d6d6 50%, #f0f0f0 88%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 2s ease-in-out infinite;
  border-radius: 8px;
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100px"};
`;
