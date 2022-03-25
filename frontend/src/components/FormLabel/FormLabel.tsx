import React from "react";
import styled from "styled-components";

type Props = { htmlFor: string; children: React.ReactNode };
function FormLabel(props: Props) {
  return <Label {...props} />;
}

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.21px;
  text-transform: capitalize;
  color: hsl(var(--primary-dark));
  cursor: pointer;
`;

export { FormLabel };
