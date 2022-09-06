import React from "react";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  margin: 10px;
  background-color: ${({ isDark }) => (isDark ? "#333" : "whitesmomke")};
  color: ${({ isDark }) => (isDark ? "whitesmoke" : "#333")};
`;

function Button() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleIsDark = () => setIsDark(!isDark);
  return (
    <StyledButton isDark={isDark} onClick={toggleIsDark}>
      Switch Theme
    </StyledButton>
  );
}

export default Button;
