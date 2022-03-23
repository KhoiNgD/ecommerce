import { Container } from "components/Container";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { CategoryHeader } from "./CategoryHeader";
import { Header } from "./Header";
import { HeroHeader } from "./HeroHeader";

function Headers() {
  const { pathname } = useLocation();
  const categories = ["headphones", "earphones", "speakers"];
  const path = pathname.split("/").at(-1);

  if (!path) {
    return <HeroHeader />;
  }

  if (categories.includes(path)) {
    return <CategoryHeader category={path} />;
  }

  return (
    <HeaderWrapper>
      <Container>
        <Header />
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled("div")`
  background: hsl(var(--primary-dark));
`;

export { Headers };
