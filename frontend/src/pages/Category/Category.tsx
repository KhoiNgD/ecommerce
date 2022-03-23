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
`;

export { Category };
