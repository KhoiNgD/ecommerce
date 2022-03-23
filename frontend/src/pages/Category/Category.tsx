import { Container } from "components/Container";
import { Menu } from "components/Menu";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <StyledContainer>
      <Outlet />
      <Menu />
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  padding-top: 160px;
  padding-bottom: 160px;

  display: flex;
  flex-direction: column;
  gap: 160px;

  position: relative;

  @media (max-width: 1100px) {
    padding-top: 120px;
    padding-bottom: 120px;
    gap: 120px;
  }

  @media (max-width: 550px) {
    padding-top: 64px;
  }
`;

export { Category };
