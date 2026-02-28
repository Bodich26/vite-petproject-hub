import { myFullProjects } from "../shared";
import { PageWidget } from "../widgets";

export default function CarMusc() {
  const { ...carMusc } = myFullProjects[5];
  return <PageWidget {...carMusc} />;
}
