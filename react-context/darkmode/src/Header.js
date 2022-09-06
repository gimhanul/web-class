import ThemeContext from "./ThemeContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  background-color: ${({ isDark }) => (isDark ? "#333" : "whitesmoke")};
  color: ${({ isDark }) => (isDark ? "whitesmoke" : "#333")};
`;
function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledHeader isDark={isDark}>
      <h2>Light Theme</h2>
    </StyledHeader>
  );
}

export default Header;
