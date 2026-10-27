import ListForm from "@/pages/ListForm";

type PageProps = {
  params: { listId: string };
};

export default function NewItemPage({ params }: PageProps) {
  return <ListForm listId={params.listId} />;
}
