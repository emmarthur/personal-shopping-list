"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import styled from "styled-components";

import Button from "@/components/Button";
import FormItem from "@/components/FormItem";
import NavBar from "@/components/NavBar";
import { useItemsContext } from "@/hooks/useItemsContext";

const FormWrapper = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 0.5rem;
  background: #2563eb;

  &:hover {
    background: #1d4ed8;
  }
`;

type ListFormProps = {
  listId: string;
};

export default function ListForm({ listId }: ListFormProps) {
  const router = useRouter();
  const { addItem } = useItemsContext();

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title || !quantity || !price) return;

    await addItem({
      title,
      quantity: Number(quantity),
      price: Number(price),
      listId: Number(listId),
    });

    router.push(`/list/${listId}`);
  }

  return (
    <>
      <NavBar goBack={() => router.back()} title="Add item" />
      <FormWrapper>
        <form onSubmit={onSubmit}>
          <FormItem
            id="title"
            label="Title"
            value={title}
            handleOnChange={setTitle}
          />
          <FormItem
            id="quantity"
            label="Quantity"
            type="number"
            value={quantity}
            handleOnChange={setQuantity}
          />
          <FormItem
            id="price"
            label="Price"
            type="number"
            value={price}
            handleOnChange={setPrice}
          />
          <SubmitButton type="submit">Add item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}
