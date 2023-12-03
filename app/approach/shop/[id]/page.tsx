import BlockmanagerNaviAp from "@/components/Navi/BlockmanagerNaviAp";
import Formaltable from "./formal/formaltable/Formaltable";

export default async function block({ params: id }: { params: any }) {
  return (
    <div>
      <BlockmanagerNaviAp />
      <Formaltable id={id.id} />
    </div>
  );
}
