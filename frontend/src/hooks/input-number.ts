import React from "react";

type Parameters = {
  defaultValue?: number;
  max?: number;
  min?: number;
  update?: (quantity: number) => void;
};
function useInputNumber({
  defaultValue = 1,
  min = 0,
  max,
  update,
}: Parameters) {
  const [value, setValue] = React.useState(defaultValue);

  function handleAdd() {
    const num = value + 1;
    if (max && num > max) {
      return;
    }
    setValue(num);

    update && update(num);
  }

  function handleSubstract() {
    const num = value - 1;
    if (num < min) {
      return;
    }
    setValue(num);

    update && update(num);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const num = Number(e.target.value);
    if ((max && num > max) || num < min) {
      return;
    }
    setValue(num);

    update && update(num);
  }

  return { value, handleAdd, handleSubstract, handleChange };
}

export { useInputNumber };
