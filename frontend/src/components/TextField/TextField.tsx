import { FormLabel } from "components/FormLabel";
import styled from "styled-components";

type Props = { label: string; placeholder: string; id: string };
function TextField({ label, placeholder, id }: Props) {
  return (
    <Wrapper>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} placeholder={placeholder} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 20px 24px;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  caret-color: hsl(var(--primary-color));
  color: hsl(var(--primary-dark));

  &:hover,
  &:active,
  &:focus {
    border-color: hsl(var(--primary-color));
  }

  &::placeholder {
    color: hsl(var(--primary-dark) / 0.4);
  }
`;

export { TextField };
