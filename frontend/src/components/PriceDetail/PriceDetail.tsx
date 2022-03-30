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

const Title = styled.dt`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: hsl(var(--primary-dark) / 0.5);
  letter-spacing: 0;
`;

const Price = styled.dd`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  letter-spacing: 0;
`;

export { PriceDetail };
