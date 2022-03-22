import styled from "styled-components";
import PrimaryProduct from "./PrimaryProduct";
import SecondaryProduct from "./SecondaryProduct";
import TertiaryProduct from "./TertiaryProduct";

function HomeProducts() {
  return (
    <Wrapper>
      <PrimaryProduct />
      <SecondaryProduct />
      <TertiaryProduct />
    </Wrapper>
  );
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
