import { Button } from "components/Button/Button";
import { H4 } from "components/Typographies";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { product: string; link: string; className?: string };
function ProductAction({ product, link, className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <H4>{product}</H4>
      <NavLink to={link}>
        <StyledButton variant="outline">See Product</StyledButton>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: hsl(var(--primary-dark));
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 32px;
`;

const StyledButton = styled(Button)`
  color: hsl(var(--primary-dark));
`;

export { ProductAction };
