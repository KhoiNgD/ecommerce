import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { className?: string };
function Navigation(props: Props) {
  return (
    <NavWrapper {...props}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/category/headphones">Headphones</StyledNavLink>
      <StyledNavLink to="/category/speakers">Speakers</StyledNavLink>
      <StyledNavLink to="/category/earphones">Earphones</StyledNavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  display: flex;
  gap: 34px;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
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
