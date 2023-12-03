import Link from "next/link";

const Permition = ({ role, id }: any) => {
  const style =
    "max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 ml-2 rounded-md text-xs font-medium bg-blue-100 text-blue-800";
  const style2 =
    "max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 ml-2 rounded-md text-xs font-medium bg-pink-100 text-pink-800";
  const style3 =
    "max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 ml-2 rounded-md text-xs font-medium bg-red-100 text-red-800";

  return (
    <div className="ml-4">
      <h3 className="text-gray-800 font-semibold">この記事が見れる権限</h3>
      <div className="mt-2 text-sm text-gray-600">
        {role.map((data: any, index: number) => {
          return data === "shopmanager" ? (
            <span className={style3}>店長</span>
          ) : data === "section-manager" ? (
            <span className={style}>部長</span>
          ) : data === "proper-member" ? (
            <span className={style2}>新卒社員</span>
          ) : data === "backoffice" ? (
            <span className={style}>本社社員</span>
          ) : data === "maldy" ? (
            <span className={style2}>洋品部門</span>
          ) : data === "block-manager" ? (
            <span className={style}>ブロック長</span>
          ) : data === "hanagoromo" ? (
            <span className={style2}>一般</span>
          ) : data === "area-manager" ? (
            <div></div>
          ) : (
            data
          );
          // </span>
        })}
      </div>
      <div className="mt-4">
        <div className="flex space-x-3">
          <Link
            href={`https://o5h6eiq13f.microcms.io/apis/ftb/${id}`}
            className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            記事編集
          </Link>
          <Link
            href="/components/ftbManuals/m51828c7x/"
            className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            閲覧権限について
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Permition;
