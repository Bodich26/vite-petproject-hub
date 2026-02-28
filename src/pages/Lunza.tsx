import { PageWidget } from "../widgets";
import { myFullProjects } from "../shared/constants";

export default function Lunza() {
  const { ...lunza } = myFullProjects[0];
  return <PageWidget {...lunza} />;
}
