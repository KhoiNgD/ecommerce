import { Button } from "components/Button/Button";
import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H1 } from "components/Typographies";
import { ReactComponent as PatternCircle } from "assets/pattern-circles.svg";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function PrimaryProduct() {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}/assets/home/mobile/image-speaker-zx9.png`}
          tabletSrc={`${process.env.PUBLIC_URL}/assets/home/tablet/image-speaker-zx9.png`}
          desktopSrc={`${process.env.PUBLIC_URL}/assets/home/desktop/image-speaker-zx9.png`}
          alt="primary product - speaker zx9"
        />
        <PatternWrapper>
          <PatternCircle />
        </PatternWrapper>
      </PictureWrapper>

      <Description>
        <StyledHeader>ZX9 SPEAKER</StyledHeader>
        <StyledBody>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </StyledBody>
        <NavLink to="/category/speakers/zx9-speaker">
          <StyledButton>See Product</StyledButton>
        </NavLink>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 560px;
  background: hsl(var(--primary-color));
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  isolation: isolate;

  @media (max-width: 1100px) {
    position: revert;
    height: revert;
    padding-top: 52px;
    padding-bottom: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 550px) {
    padding: 55px 24px;
  }
`;

const PictureWrapper = styled.div`
  height: 493px;
  position: absolute;
  left: 118px;
  bottom: -15px;
  z-index: 1;

  & picture,
  & picture img {
    height: 100%;
  }

  @media (max-width: 1100px) {
    position: relative;
    height: 237px;
    left: revert;
    top: revert;
  }

  @media (max-width: 550px) {
    height: 207px;
  }
`;

const PatternWrapper = styled.div`
  position: absolute;
  top: -30%;
  left: -67%;
  z-index: -1;

  & svg {
    max-width: revert;
  }

  @media (max-width: 1100px) {
    top: -150%;
    left: -190%;
  }

  @media (max-width: 550px) {
    top: -175%;
    left: -225%;
    transform: scale(0.65);
  }
`;

const Description = styled.div`
  max-width: 350px;
  color: hsl(var(--primary-white));
  position: absolute;
  top: 100px;
  right: 75px;
  z-index: 2;

  @media (max-width: 1100px) {
    position: revert;
    margin-top: 64px;
    text-align: center;
  }

  @media (max-width: 550px) {
    max-width: 280px;
    margin-top: 32px;
  }
`;

const StyledHeader = styled(H1)``;

const StyledBody = styled(Body)`
  opacity: 0.75;
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 550px) {
    margin: 24px 0;
  }
`;

type FillButtonProps = { children: React.ReactNode };
function FillButton(props: FillButtonProps) {
  return <Button variant="fill" {...props} />;
}

const StyledButton = styled(FillButton)`
  background: hsl(var(--primary-dark));

  &:hover {
    background: #4c4c4c;
  }
`;

export default PrimaryProduct;
