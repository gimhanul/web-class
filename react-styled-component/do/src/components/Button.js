import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({primary}) => primary ? 'white' : 'red'};
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`

export default function Button({text, primary}) {
    return (
        <StyledButton primary={primary}>{text}</StyledButton>
    )
}
