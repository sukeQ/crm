import { Icon5 } from "@/components/icon/Icon5";

const Birthday = ({ data }: any) => {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon5 width={"2em"} height={"2em"} />
        </div>
        <div className="grow ms-4">
          <div className=" text-gray-800 dark:text-gray-200">
            {data && data.birth_gengo} {data && data.birth_y}年{" "}
            {data && data.birth_m}月 {data && data.birth_d}日
          </div>
          <div className="text-xs text-gray-500">00歳</div>
        </div>
      </div>
    </div>
  );
};
export default Birthday;
