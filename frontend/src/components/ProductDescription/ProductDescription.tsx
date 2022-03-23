import { Body, H3 } from "components/Typographies";
import styled from "styled-components";

function ProductDescription() {
  const str =
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.";
  return (
    <Wrapper>
      <Content>
        <H3>Features</H3>
        <StyledBody>{str}</StyledBody>
      </Content>

      <Content>
        <H3>In the box</H3>
        <List>
          <ListItem>
            <ItemQuantity>1x</ItemQuantity>
            <StyledBody>Headphone Unit</StyledBody>
          </ListItem>
          <ListItem>
            <ItemQuantity>2x</ItemQuantity>
            <StyledBody>Replacement Earcups</StyledBody>
          </ListItem>
          <ListItem>
            <ItemQuantity>1x</ItemQuantity>
            <StyledBody>User Manual</StyledBody>
          </ListItem>
          <ListItem>
            <ItemQuantity>1x</ItemQuantity>
            <StyledBody>3.5mm 5m Audio Cable</StyledBody>
          </ListItem>
          <ListItem>
            <ItemQuantity>1x</ItemQuantity>
            <StyledBody>Travel Bag</StyledBody>
          </ListItem>
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
