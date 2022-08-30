import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({primary}) => primary ? 'white' : 'red'};
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  
  &:hover {
    background-color: gray;
  }
  
  .subtext {
    font-size: 10px;
  }
`

export default function Button({text, primary}) {
    return (
        <StyledButton primary={primary}>
            {text}
            <p className="subtext">
                sub text
            </p>
        </StyledButton>
    )
}
