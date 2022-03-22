import { Container } from "components/Container";
import { Menu } from "components/Menu";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  padding-top: 120px;
  padding-bottom: 200px;
`;

export { Home };
