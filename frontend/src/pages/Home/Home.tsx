import { Container } from "components/Container";
import { Menu } from "components/Menu";
import styled from "styled-components";
import { HomeProducts } from "./HomeProducts";

function Home() {
  return (
    <Wrapper>
      <Menu />
      <HomeProducts />
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  padding-top: 120px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 168px;

  @media (max-width: 1100px) {
    padding: 96px 0;
    gap: 96px;
  }

  @media (max-width: 550px) {
    padding-top: 40px;
    padding-bottom: 120px;
    gap: 120px;
  }
`;

export { Home };
