import styled from "styled-components";

import type { ShoppingListItem } from "@/types";

const ListItemWrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 0.85rem 1rem;
  margin-bottom: 0.65rem;
  gap: 0.5rem;
`;

const Title = styled.h3`
  flex: 1 1 50%;
  margin: 0;
  font-size: 1rem;
  color: #0f172a;
`;

const Meta = styled.span`
  flex: 0 0 auto;
  font-size: 0.9rem;
  color: #475569;
`;

const Price = styled.span`
  flex: 0 0 auto;
  font-weight: 700;
  color: #0f172a;
  min-width: 4.5rem;
  text-align: right;
`;

export default function ListItem({ data }: { data: ShoppingListItem }) {
  return (
    <ListItemWrapper>
      <Title>{data.title}</Title>
      <Meta>{`Qty ${data.quantity}`}</Meta>
      <Price>{`$${data.price.toFixed(2)}`}</Price>
    </ListItemWrapper>
  );
}
