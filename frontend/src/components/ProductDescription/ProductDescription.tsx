import { Body, H3 } from "components/Typographies";
import styled from "styled-components";

function ProductDescription() {
  const str =
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.";
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
