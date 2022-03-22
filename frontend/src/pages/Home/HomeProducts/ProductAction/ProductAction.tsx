import { Button } from "components/Button/Button";
import { H4 } from "components/Typographies";
import styled from "styled-components";

type Props = { product: string; className?: string };
function ProductAction({ product, className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <H4>{product}</H4>
      <Button variant="outline">See Product</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: hsl(var(--primary-dark));
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export { ProductAction };
