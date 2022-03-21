import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Cart } from "assets/icon-cart.svg";
import styled from "styled-components";
import { Navigation } from "components/Navigation";

type Props = { className?: string };

function Header({ className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <Logo />

      <Navigation />

      <CartWrapper>
        <Cart />
      </CartWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 97px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    height: 90px;
  }
`;

const CartWrapper = styled.div`
  cursor: pointer;
`;

export { Header };
