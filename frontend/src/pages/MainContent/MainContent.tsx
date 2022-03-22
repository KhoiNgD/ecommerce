import { Container } from "components/Container";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "./Bio";

function MainContent() {
  return (
    <>
      <Outlet />

      <BioContainer>
        <Bio />
      </BioContainer>
    </>
  );
}

const BioContainer = styled(Container)`
  margin-bottom: 200px;

  @media (max-width: 1100px) {
    margin-bottom: 96px;
  }

  @media (max-width: 550px) {
    margin-bottom: 120px;
  }
`;

export { MainContent };
