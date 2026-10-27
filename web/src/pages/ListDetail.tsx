"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

import ListItem from "@/components/ListItem";
import NavBar from "@/components/NavBar";
import { useItemsContext } from "@/hooks/useItemsContext";
import { useListsContext } from "@/hooks/useListsContext";

const ListItemWrapper = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
`;

const Status = styled.p`
  color: #64748b;
`;

type ListDetailProps = {
  listId: string;
};

export default function ListDetail({ listId }: ListDetailProps) {
  const router = useRouter();
  const { loading, error, items, fetchItems } = useItemsContext();
  const { list, fetchList } = useListsContext();

  useEffect(() => {
    if (listId) {
      fetchItems(listId);
      fetchList(listId);
    }
  }, [fetchItems, fetchList, listId]);

  const title =
    list && "title" in list && list.title ? list.title : "List";

  return (
    <>
      <NavBar
        goBack={() => router.push("/")}
        title={title}
        openForm={() => router.push(`/list/${listId}/new`)}
      />
      <ListItemWrapper>
        {loading || error ? (
          <Status>{error || "Loading…"}</Status>
        ) : (
          items.map((item) => <ListItem key={item.id} data={item} />)
        )}
      </ListItemWrapper>
    </>
  );
}
