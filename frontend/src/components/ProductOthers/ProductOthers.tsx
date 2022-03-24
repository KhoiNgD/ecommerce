import { H3 } from "components/Typographies";
import styled from "styled-components";
import Other from "./Other";

function ProductOthers() {
  return (
    <Wrapper>
      <H3>You may also like</H3>
      <OthersWrapper>
        <Other />
        <Other />
        <Other />
      </OthersWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const OthersWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 30px;

  & > * {
    flex: 1;
  }

  @media (max-width: 1100px) {
    margin-top: 56px;
    gap: 11px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    flex-direction: column;
    gap: 56px;
  }
`;

export { ProductOthers };
