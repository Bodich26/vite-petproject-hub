import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function Eternal() {
  const { ...eternal } = myFullProjects[3];
  return <PageWidget {...eternal} />;
}
