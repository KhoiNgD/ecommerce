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
`;

export { MainContent };
