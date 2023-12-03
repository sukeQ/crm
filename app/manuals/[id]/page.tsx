import { getDetail } from "../../../libs/client";
import ManualContents from "../feature/ManualContents";

export const revalidate = 60;
const FtbManuals = async ({ params }: { params: { id: string } }) => {
  const article = await getDetail(params.id);

  return <ManualContents article={article} />;
};
export default FtbManuals;
