import { Body, H3 } from "components/Typographies";
import { IProductInclude } from "helpers/types";
import styled from "styled-components";

type Props = { features: string; includes: IProductInclude[] };
function ProductDescription({ features, includes }: Props) {
  return (
    <Wrapper>
      <Content>
        <H3>Features</H3>
        <StyledBody>{features}</StyledBody>
      </Content>

      <Content>
        <H3>In the box</H3>
        <List>
          {includes.map(({ quantity, item }) => (
            <ListItem key={item}>
              <ItemQuantity>{quantity}x</ItemQuantity>
              <StyledBody>{item}</StyledBody>
            </ListItem>
          ))}
        </List>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 125px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 120px;
  }

  @media (max-width: 768px) {
    gap: 88px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  &:first-of-type {
    max-width: 635px;
  }

  @media (max-width: 1100px) {
    &:first-of-type {
      max-width: revert;
    }

    &:nth-of-type(2) {
      flex-direction: row;

      & ${H3} {
        min-width: 281px;
        gap: 69px;
      }
    }
  }

  @media (max-width: 768px) {
    &:nth-of-type(2) {
      flex-direction: column;
      gap: 24px;
    }
  }
`;

const StyledBody = styled(Body)`
  white-space: pre-wrap;
  color: hsl(var(--primary-dark) / 0.5);
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 24px;
`;

const ItemQuantity = styled(Body)`
  color: hsl(var(--primary-color) / 0.5);
`;

export { ProductDescription };
