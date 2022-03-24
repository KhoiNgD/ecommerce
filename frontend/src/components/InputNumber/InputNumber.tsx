import React from "react";
import styled from "styled-components";
import Sign from "./Sign";

type Props = { minValue?: number; maxValue: number };
function InputNumber({ minValue = 0, maxValue }: Props) {
  const [value, setValue] = React.useState(0);

  function handleMinus() {
    const num = value - 1;
    if (num < minValue) {
      return;
    }
    setValue(num);
  }

  function handlePlus() {
    const num = value + 1;
    if (num > maxValue) {
      return;
    }
    setValue(value + 1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const num = Number(e.target.value);
    if (num > maxValue) {
      return;
    }
    setValue(num);
  }

  return (
    <Wrapper>
      <Sign handleClick={handleMinus}>-</Sign>
      <Input value={value} onChange={handleChange} type="number" />
      <Sign handleClick={handlePlus}>+</Sign>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 7ch;
  background: #f1f1f1;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 15px;
  border: none;
  outline: none;

  &[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export { InputNumber };
