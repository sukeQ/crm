import { Icon4 } from "@/components/icon/Icon4";

const Tel = ({ data }: any) => {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon4 width={"2em"} height={"2em"} />
        </div>
        <div className="grow ms-4">
          <div className="text-xm text-gray-500">{data && data.phone}</div>
          <div className="text-xm text-gray-500">{data && data.mobile}</div>
        </div>
      </div>
    </div>
  );
};
export default Tel;
