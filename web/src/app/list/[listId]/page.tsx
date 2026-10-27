import ListDetail from "@/pages/ListDetail";

type PageProps = {
  params: { listId: string };
};

export default function ListDetailPage({ params }: PageProps) {
  return <ListDetail listId={params.listId} />;
}
