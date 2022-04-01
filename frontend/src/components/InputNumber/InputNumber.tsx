import React from "react";
import styled from "styled-components";
import Sign from "./Sign";

type Props = {
  small?: boolean;
  value: number;
  handleAdd: () => void;
  handleSubstract: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function InputNumber({
  value,
  handleAdd,
  handleSubstract,
  handleChange,
  small = false,
}: Props) {
  return (
    <Wrapper>
      <Sign isSmall={small} handleClick={handleSubstract}>
        -
      </Sign>
      <Input
        isSmall={small}
        value={value}
        onChange={handleChange}
        type="number"
      />
      <Sign isSmall={small} handleClick={handleAdd}>
        +
      </Sign>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input<{ isSmall: boolean }>`
  width: ${(props) => (props.isSmall ? "5ch" : "7ch")};
  background: #f1f1f1;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: ${(props) => (props.isSmall ? "7px" : "15px")};
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
