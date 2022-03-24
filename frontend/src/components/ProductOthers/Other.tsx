import { Button } from "components/Button/Button";
import { ResponsivePicture } from "components/ResponsivePicture";
import { H5 } from "components/Typographies";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Other() {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}/assets/shared/mobile/image-xx99-mark-one-headphones.jpg`}
          tabletSrc={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-xx99-mark-one-headphones.jpg`}
          desktopSrc={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-xx99-mark-one-headphones.jpg`}
          mediaMobile="(max-width: 768px)"
          alt="other product"
        />
      </PictureWrapper>
      <StyledH5>XX99 MARK I</StyledH5>
      <NavLink to="">
        <Button variant="fill">See Product</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PictureWrapper = styled.div`
  background: #f1f1f1;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const StyledH5 = styled(H5)`
  margin-top: 40px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export default Other;
