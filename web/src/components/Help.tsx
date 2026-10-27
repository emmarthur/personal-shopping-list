"use client";

import styled from "styled-components";

const HelpCard = styled.section`
  max-width: 36rem;
  margin: 2rem auto 3rem;
  padding: 1.25rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #fed7aa;
  border-radius: 12px;
  color: #334155;
  line-height: 1.55;
`;

const HelpTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 1.05rem;
  color: #0f172a;
`;

export default function Help() {
  return (
    <HelpCard aria-labelledby="help-heading">
      <HelpTitle id="help-heading">Help</HelpTitle>
      <p>
        Open a list to see its items. Use <strong>Add item</strong> to post a new row with
        title, quantity, and price. Lists and items are loaded through nested React Context
        providers with <code>useReducer</code> for updates.
      </p>
    </HelpCard>
  );
}
