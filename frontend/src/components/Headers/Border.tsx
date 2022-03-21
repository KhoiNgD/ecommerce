import styled from "styled-components";

function Border() {
  return <Wrapper />;
}

const Wrapper = styled.div`
  height: 1px;
  background: hsl(var(--primary-white) / 0.2);
`;

export { Border };
