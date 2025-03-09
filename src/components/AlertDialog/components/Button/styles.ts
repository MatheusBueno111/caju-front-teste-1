import styled from "styled-components";

const buttonVariants = {
  confirm: { background: "#64a98c", color: "#FFFFFF" },
  cancel: { background: "#F44336", color: "#FFFFFF" },
};

interface Props {
  variant: keyof typeof buttonVariants;
}

export const Button = styled.button<Props>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s ease-in-out;
  width: 100%;

  background: ${({ variant }) => buttonVariants[variant].background};
  color: ${({ variant }) => buttonVariants[variant].color};

  &:hover {
    opacity: 0.8;
  }
`;
