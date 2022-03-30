import { ResponsivePicture } from "components/ResponsivePicture";
import { IProductGallery } from "helpers/types";
import styled from "styled-components";

type Props = { gallery: IProductGallery };
function ProductGallery({ gallery }: Props) {
  const { first, second, third } = gallery;

  return (
    <Wrapper>
      <StyledPicture
        mobileSrc={`${process.env.PUBLIC_URL}${first.mobile.slice(1)}`}
        tabletSrc={`${process.env.PUBLIC_URL}${first.tablet.slice(1)}`}
        desktopSrc={`${process.env.PUBLIC_URL}${first.desktop.slice(1)}`}
        alt="image gallery 1"
      />
      <StyledPicture
        mobileSrc={`${process.env.PUBLIC_URL}${second.mobile.slice(1)}`}
        tabletSrc={`${process.env.PUBLIC_URL}${second.tablet.slice(1)}`}
        desktopSrc={`${process.env.PUBLIC_URL}${second.desktop.slice(1)}`}
        alt="image gallery 2"
      />
      <StyledPicture
        mobileSrc={`${process.env.PUBLIC_URL}${third.mobile.slice(1)}`}
        tabletSrc={`${process.env.PUBLIC_URL}${third.tablet.slice(1)}`}
        desktopSrc={`${process.env.PUBLIC_URL}${third.desktop.slice(1)}`}
        alt="image gallery 3"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40fr 55fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 32px;

  @media (max-width: 1100px) {
    column-gap: 18px;
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    column-gap: revert;
    row-gap: 20px;
  }
`;

const StyledPicture = styled(ResponsivePicture)`
  & img {
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:nth-of-type(2) {
    grid-column: 1;
    grid-row: 2;
  }

  &:nth-of-type(3) {
    grid-column: 2;
    grid-row: 1 / -1;
  }

  @media (max-width: 768px) {
    &:nth-of-type(2) {
      grid-column: revert;
      grid-row: revert;
    }

    &:nth-of-type(3) {
      grid-column: revert;
      grid-row: revert;
    }
  }
`;

export { ProductGallery };
