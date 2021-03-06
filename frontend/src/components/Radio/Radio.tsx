import { FormLabel } from "components/FormLabel";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import styled from "styled-components";

// Radio button style guide: https://moderncss.dev/pure-css-custom-styled-radio-buttons/

type Props = { id: string; label: string; name: string; value: string };
function Radio({ id, label, ...props }: Props) {
  const { register, setValue } = useFormContext();
  const paymentMethod = useWatch({
    name: "paymentMethod",
  });

  function handleClick() {
    const { name, value } = props;
    setValue(name, value);
  }

  return (
    <Wrapper isChecked={paymentMethod === props.value} onClick={handleClick}>
      <Input type="radio" id={id} {...props} {...register(props.name)} />

      <FormLabel htmlFor={id}>{label}</FormLabel>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 16px;
  border: 1px solid;
  border-color: ${({ isChecked }) =>
    isChecked ? "hsl(var(--primary-color))" : "#cfcfcf"};
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: hsl(var(--primary-color));
  }
`;

const Input = styled.input`
  appearance: none;
  width: 2em;
  height: 2em;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;

  &::before {
    content: "";
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s transform ease-in-out;
    box-shadow: inset 1em 1em hsl(var(--primary-color));
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export { Radio };
