import { Category } from "shared";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";

function Menu() {
  return (
    <Wrapper>
      <MenuItem category={Category.HEADPHONES} />
      <MenuItem category={Category.SPEAPKERS} />
      <MenuItem category={Category.EARPHONES} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  & > * {
    flex: 1;
  }

  @media (max-width: 1100px) {
    gap: 10px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: calc(16px + (104px / 2));
  }
`;

export { Menu };
