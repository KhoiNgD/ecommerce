import { Container } from "@components/Container";
import { H2 } from "@components/Typographies";
import styled from "styled-components";
import { Border } from "./Border";
import { Header } from "./Header";

type Props = { category: string };

function CategoryHeader({ category }: Props) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Border />
        <CategoryBox>
          <H2>{category}</H2>
        </CategoryBox>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: hsl(var(--primary-dark));
  color: hsl(var(--primary-white));
`;

const CategoryBox = styled.div`
  padding: 98px 0;
  margin: auto;
`;

export { CategoryHeader };
