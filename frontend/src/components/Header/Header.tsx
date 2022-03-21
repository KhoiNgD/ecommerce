import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as Cart } from "@assets/icon-cart.svg";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <NavWrapper>
        <a>Home</a>
        <a>Headphones</a>
        <a>Speakers</a>
        <a>Earphones</a>
      </NavWrapper>

      <CartWrapper>
        <Cart />
      </CartWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 34px;
`;

const CartWrapper = styled.div`
  flex: 1;
`;

export { Header };
