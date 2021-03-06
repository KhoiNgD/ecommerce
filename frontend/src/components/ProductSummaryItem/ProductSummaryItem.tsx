import React from "react";
import styled, { css } from "styled-components";

type Props = {
  quantity: React.ReactNode;
  slug: string;
  name: string;
  price: number;
};
function ProductSummaryItem({ quantity, slug, name, price }: Props) {
  const regex = new RegExp("headphones|earphones|speakers", "gi");

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={`${process.env.PUBLIC_URL}/assets/cart/image-${slug}.jpg`}
        />
      </ImageWrapper>
      <ProductInfo>
        <div>
          <Name>{name.toUpperCase().replace(regex, "").trim()}</Name>
          <Price>$ {price}</Price>
        </div>
        {quantity}
      </ProductInfo>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  padding: 12px 14px;
  background: hsl(var(--grey));
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Image = styled.img`
  height: 40px;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const ProductStyle = css`
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 0;
`;

const Name = styled.div`
  ${ProductStyle}
  color: hsl(var(--primary-dark));
  font-size: 1.5rem;
`;

const Price = styled.div`
  ${ProductStyle}
  font-size: 1.4rem;
  color: hsl(var(--primary-dark) / 0.5);
`;

export { ProductSummaryItem };
