import styled from "styled-components";

type ButtonVariant = "fill" | "outline" | "normal";

interface Props {
  variant: ButtonVariant;
}

function Button({ variant = "normal" }: Props) {
  if (variant === "fill") return <FillButton />;
  if (variant === "outline") return <OutlineButton />;
  return <IconButton />;
}

const StyledButton = styled.button`
  padding: 15px 30px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const FillButton = styled(StyledButton)`
  color: var(--primary-white);
  background: var(--primary-color);

  &:hover {
    background: var(--secondary-color);
  }
`;

const OutlineButton = styled(StyledButton)`
  color: var(--primary-black);
  border: 1px solid var(--primary-color);

  &:hover {
    color: var(--primary-white);
    background: var(--secondary-black);
  }
`;

const IconButton = styled(StyledButton)`
  color: hsl(var(--primary-white) / 0.5);

  &:hover {
    color: var(--primary-color);
  }
`;

export { Button };
