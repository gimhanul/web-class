import React from "react";
import styled from "styled-components";
import Section from "./components/Section";
import "./styles.css";

const Title = styled.h1`
  color: #b19cd9;
`;

export default function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
      <div>
        <Section text="M" progress="100%" />
        <Section text="T" progress="90%" />
        <Section text="W" progress="80%" />
        <Section text="T" progress="70%" />
        <Section text="F" progress="60%" />
        <Section text="S" progress="50%" />
        <Section text="S" progress="10%" />
      </div>
    </>
  );
}
