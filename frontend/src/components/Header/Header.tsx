import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as Cart } from "@assets/icon-cart.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <NavWrapper>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/headphones">Headphones</StyledNavLink>
        <StyledNavLink to="/speakers">Speakers</StyledNavLink>
        <StyledNavLink to="/earphones">Earphones</StyledNavLink>
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
  color: var(--primary-white);
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 34px;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2.5rem;

  &:hover,
  &.active {
    color: var(--primary-color);
  }
`;

const CartWrapper = styled.div`
  flex: 1;
`;

export { Header };
