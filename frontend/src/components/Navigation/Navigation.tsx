import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <NavWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/headphones">Headphones</StyledNavLink>
      <StyledNavLink to="/speakers">Speakers</StyledNavLink>
      <StyledNavLink to="/earphones">Earphones</StyledNavLink>
    </NavWrapper>
  );
}

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
  color: hsl(var(--primary-white));
  text-decoration: none;

  &:hover,
  &.active {
    color: hsl(var(--primary-color));
  }
`;

export { Navigation };
