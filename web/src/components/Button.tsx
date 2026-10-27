import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ea580c;
  color: white;
  padding: 10px 14px;
  line-height: 1.4;
  border-radius: 8px;
  border: 0;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #c2410c;
  }
`;

export default Button;
