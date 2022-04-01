import React from "react";
import styled from "styled-components";

type ButtonVariant = "fill" | "outline" | "normal";

interface Props {
  variant: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({ variant = "normal", ...props }: Props) {
  if (variant === "fill") return <FillButton {...props} />;
  if (variant === "outline") return <OutlineButton {...props} />;
  return <IconButton {...props} />;
}

const StyledButton = styled.button`
  padding: 15px 30px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled,
  &:disabled:hover {
    background: hsl(var(--grey));
  }
`;

const FillButton = styled(StyledButton)`
  color: hsl(var(--primary-white));
  background: hsl(var(--primary-color));

  &:hover {
    background: hsl(var(--secondary-color));
  }
`;

const OutlineButton = styled(StyledButton)`
  color: hsl(var(--primary-black));
  background: transparent;
  border: 1px solid hsl(var(--primary-dark));

  &:hover {
    color: hsl(var(--primary-white));
    background: hsl(var(--primary-dark));
  }
`;

const IconButton = styled(StyledButton)`
  color: hsl(var(--primary-dark) / 0.5);
  background: transparent;
  display: flex;
  align-items: center;
  gap: 14px;

  &:hover {
    color: hsl(var(--primary-color));
  }
`;

export { Button };
