import React from "react";
import styled from "styled-components";

type Props = { children: React.ReactNode; className?: string };

function Container({ children, className }: Props) {
  return <Wrapper className={className} children={children} />;
}

const Wrapper = styled.div`
  margin: auto;
  max-width: 1110px;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 550px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export { Container };
