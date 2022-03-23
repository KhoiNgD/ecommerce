import { Product } from "components/Product";
import styled from "styled-components";

function ProductList() {
  return (
    <Wrapper>
      <Product />
      <Product />
      <Product />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;

  & *:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }

  @media (max-width: 1100px) {
    gap: 120px;
  }
`;

export { ProductList };
