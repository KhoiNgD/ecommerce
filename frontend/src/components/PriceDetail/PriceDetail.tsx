import { Body, H6 } from "components/Typographies";
import styled from "styled-components";

type Props = { title: string; price: string };
function PriceDetail({ title, price }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Price>$ {price}</Price>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Body)`
  color: hsl(var(--primary-dark) / 0.5);
  letter-spacing: 0;
`;

const Price = styled(H6)`
  letter-spacing: 0;
`;

export { PriceDetail };
