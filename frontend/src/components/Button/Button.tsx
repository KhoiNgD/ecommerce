import React from "react";
import styled from "styled-components";

type ButtonVariant = "fill" | "outline" | "normal";

interface Props {
  variant: ButtonVariant;
  children: React.ReactNode;
}

function Button({ variant = "normal", children }: Props) {
  if (variant === "fill") return <FillButton children={children} />;
  if (variant === "outline") return <OutlineButton children={children} />;
  return <IconButton children={children} />;
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
  border: 1px solid hsl(var(--primary-color));

  &:hover {
    color: hsl(var(--primary-white));
    background: hsl(var(--secondary-black));
  }
`;

const IconButton = styled(StyledButton)`
  color: hsl(var(--primary-white) / 0.5);

  &:hover {
    color: hsl(var(--primary-color));
  }
`;

export { Button };
