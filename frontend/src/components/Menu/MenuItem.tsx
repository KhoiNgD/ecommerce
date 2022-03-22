import { Button } from "components/Button/Button";
import { H6 } from "components/Typographies";
import { ReactComponent as ArrowIcon } from "assets/icon-arrow-right.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

type Props = { category: string };

function MenuItem({ category }: Props) {
  return (
    <Wrapper to={category}>
      <Image
        src={`./assets/shared/desktop/image-category-thumbnail-${category}.png`}
        alt="category thumbnail headphone"
      />

      <H6>{category}</H6>

      <ButtonWrapper>
        <Button variant="normal">
          SHOP <ArrowIcon />{" "}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(NavLink)`
  background: hsl(var(--grey));
  border-radius: var(--border-radius);
  text-decoration: none;
  color: hsl(var(--primary-dark));

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover button {
    color: hsl(var(--primary-color));
  }
`;

const Image = styled.img`
  --height: 160px;
  height: var(--height);
  margin-top: calc(((var(--height) / 2) - 20px) * -1);

  @media (max-width: 1100px) {
    --height: 133px;
  }

  @media (max-width: 550px) {
    --height: 104px;
  }
`;

const ButtonWrapper = styled.p`
  margin: auto;
`;

export { MenuItem };
