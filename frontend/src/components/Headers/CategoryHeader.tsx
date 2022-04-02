import { Container } from "components/Container";
import { H2 } from "components/Typographies";
import styled from "styled-components";

type Props = { category: string };

function CategoryHeader({ category }: Props) {
  return (
    <Wrapper>
      <CategoryBox>
        <H2>{category}</H2>
      </CategoryBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 69px;
  background: hsl(var(--primary-dark));
  color: hsl(var(--primary-white));
`;

const CategoryBox = styled(Container)`
  padding: 98px 0;
  text-align: center;
`;

export { CategoryHeader };
