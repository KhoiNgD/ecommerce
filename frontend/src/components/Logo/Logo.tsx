import { ReactComponent as LogoIcon } from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Logo() {
  return (
    <LogoWrapper to="/">
      <LogoIcon />
    </LogoWrapper>
  );
}

const LogoWrapper = styled(NavLink)``;

export { Logo };
