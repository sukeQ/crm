import Link from "next/link";
import AuthButton from "./AuthButton";
import User from "./User";
import { userInfo } from "@/hooks/useUser";

// ヘッダ下ナビメニュー
const Navi = async () => {
  const user = await userInfo();
  return (
    <nav
      className="sticky -top-px z-50 bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-3 md:pb-3 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]"
      aria-label="Jump links"
    >
      <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
          <Link
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/crm"
          >
            お客様管理
          </Link>
        </div>
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <Link
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            営業組織図
          </Link>
        </div>
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <Link
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            営業行動数値
          </Link>
        </div>
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <Link
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            社内報
          </Link>
        </div>
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <Link
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            カタログ
          </Link>
        </div>
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <Link
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            資料貸出
          </Link>
        </div>
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <div className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            {user[1]}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navi;
