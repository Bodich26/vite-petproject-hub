import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function Todos() {
  const { ...todos } = myFullProjects[4];
  return <PageWidget {...todos} />;
}
