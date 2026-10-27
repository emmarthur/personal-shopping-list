"use client";

import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";

import NavBar from "@/components/NavBar";
import { useListsContext } from "@/hooks/useListsContext";

const ListWrapper = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
`;

const ListLink = styled(Link)`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 0.85rem 1rem;
  background: #f1f5f9;
  border-radius: 10px;
  margin-bottom: 0.65rem;
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #e2e8f0;
  }
`;

const Status = styled.p`
  color: #64748b;
`;

export default function Lists() {
  const { loading, error, lists, fetchLists } = useListsContext();

  useEffect(() => {
    if (!lists.length) {
      fetchLists();
    }
  }, [fetchLists, lists.length]);

  return (
    <>
      <NavBar title="Your lists" />
      <ListWrapper>
        {loading || error ? (
          <Status>{error || "Loading…"}</Status>
        ) : (
          lists.map((list) => (
            <ListLink key={list.id} href={`/list/${list.id}`}>
              {list.title}
            </ListLink>
          ))
        )}
      </ListWrapper>
    </>
  );
}
