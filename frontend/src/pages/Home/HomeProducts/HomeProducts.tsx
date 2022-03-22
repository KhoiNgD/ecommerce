import styled from "styled-components";

function HomeProducts() {
  return <Wrapper>Products</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 1100px) {
    gap: 32px;
  }

  @media (max-width: 550px) {
    gap: 24px;
  }
`;

export { HomeProducts };
