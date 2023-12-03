import { currentChargeBlock } from "@/hooks/currentOrg";
import Formaltable from "./formalblock/formaltable/Formaltable";
import BlockmanagerNaviAp from "@/components/Navi/BlockmanagerNaviAp";

export default async function block({ params: id }: { params: any }) {
  const shoplist = await currentChargeBlock(id.id);
  return (
    <div>
      <BlockmanagerNaviAp />
      <Formaltable shoplist={shoplist} />
    </div>
  );
}
