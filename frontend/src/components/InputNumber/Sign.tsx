import React from "react";
import styled from "styled-components";

type Prop = {
  children: React.ReactNode;
  handleClick: () => void;
};
function Sign({ children, handleClick }: Prop) {
  return <Wrapper onClick={handleClick}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 15px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: #f1f1f1;
  color: hsl(var(--primary-dark) / 0.25);
  cursor: pointer;
  user-select: none;

  &:hover {
    color: hsl(var(--primary-color));
  }
`;

export default Sign;
