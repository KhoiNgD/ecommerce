import { Button } from "components/Button/Button";
import { ResponsivePicture } from "components/ResponsivePicture";
import { H5 } from "components/Typographies";
import { IProductOthers } from "helpers/types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { product: IProductOthers };
function Other({ product }: Props) {
  const {
    slug,
    name,
    image: { mobile, tablet, desktop },
  } = product;

  let category = slug.split("-").at(-1);
  category = category === "speaker" ? "speakers" : category;

  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}${mobile.slice(1)}`}
          tabletSrc={`${process.env.PUBLIC_URL}${tablet.slice(1)}`}
          desktopSrc={`${process.env.PUBLIC_URL}${desktop.slice(1)}`}
          mediaMobile="(max-width: 768px)"
          alt={name}
        />
      </PictureWrapper>
      <StyledH5>{name}</StyledH5>
      <NavLink to={`/category/${category}/${slug}`}>
        <Button variant="fill">See Product</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.li`
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
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export default Other;
