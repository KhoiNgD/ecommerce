import { Product } from "components/Product";
import { useProducts } from "hooks/products";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductList() {
  const { category } = useParams();
  const products = useProducts(category!);

  return (
    <Wrapper>
      {products?.length
        ? products?.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : "Loading..."}
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
