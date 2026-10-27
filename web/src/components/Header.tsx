"use client";

import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #f97316, #ea580c);
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.35rem, 4vw, 1.75rem);
  font-weight: 700;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Shopping lists</Title>
    </HeaderWrapper>
  );
}
