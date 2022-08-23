import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const Title = styled.h1`
    color: #aaecf0;
`

const Section = styled.div`
  background-color: #aac9f0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
`

export default function Content() {
    return (
        <Section className="section">
            <Title>Section</Title>
            <Button text="me first" primary/>
            <Button text="me second"/>
            <Icon primary/>
        </Section>
    )
}

