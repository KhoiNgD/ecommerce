import { ProductDescription } from "components/ProductDescription";
import { ProductDetail } from "components/ProductDetail";
import { Body } from "components/Typographies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Details() {
  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  return (
    <>
      <NavigateBack onClick={navigateBack}>Go Back</NavigateBack>

      <Wrapper>
        <ProductDetail />
        <ProductDescription />
      </Wrapper>
    </>
  );
}

const NavigateBack = styled(Body)`
  cursor: pointer;
  color: hsl(var(--primary-dark) / 0.5);
  position: absolute;
  top: 79px;
  left: 40px;

  @media (max-width: 1100px) {
    top: 33px;
  }

  @media (max-width: 550px) {
    top: 24px;
    left: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;

  @media (max-width: 1100px) {
    gap: 120px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 88px;
  }
`;

export { Details };
