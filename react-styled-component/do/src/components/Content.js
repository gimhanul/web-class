import styled, {keyframes} from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
      transform: rotate(360deg);
    }
`

const Title = styled.h1`
    color: #aaecf0;
    animation: 2s ${rotate} linear infinite;
`

const SubTitle = styled(Title)`
  font-size: 14px;
  align-self: center;
`

const ParagraphTitle = styled(SubTitle)`
  color: gray;
`

const ReversedTitle = props =>
    <ParagraphTitle {...props} children={props.children.split('').reverse()}/>

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
            <Title>😙 Section</Title>
            <SubTitle>I am a subtitle</SubTitle>
            <Button text="me first" primary/>
            <Button text="me second"/>
            <Icon border={'solid 3px'} statusColor={'ready'} status={'in-progress'}/>
            <Icon/>
            <ParagraphTitle as = {ReversedTitle}>I am a paragraph title</ParagraphTitle>
        </Section>
    )
}
