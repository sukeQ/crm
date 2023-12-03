"use client";

import { Icon7 } from "@/components/icon/Icon7";
import { Icon8 } from "@/components/icon/Icon8";
import { supabaseCRM } from "@/utils/supabase/supabase";
import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<any>();
  const [countP, setCountP] = useState<any>();
  useEffect(() => {
    const detafetch = async () => {
      const data = await supabaseCRM
        .from("customers_m")
        .select("*", { count: "planned", head: true });
      setCount(data);
      const premium = await supabaseCRM
        .from("customers_m")
        .select("*", { count: "planned", head: true })
        .eq("rank", "1");
      setCountP(premium);
    };
    detafetch();
  }, []);
  return (
    <div className="grid md:grid-cols-2 border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:border-gray-700">
      {/* <!-- Card --> */}
      <a
        className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
      >
        <div className="flex z-0 md:grid lg:flex gap-y-3 gap-x-5">
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>

          <div className="grow">
            <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
              登録顧客数
            </p>
            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
              {count && count.count && count.count.toLocaleString()}
            </h3>
            <div className="mt-1 flex justify-between items-center">
              <p className="text-sm text-gray-500">システム登録データ数 </p>
            </div>
          </div>
        </div>
      </a>
      {/* <!-- End Card --> */}

      {/* <!-- Card --> */}
      <a
        className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
      >
        <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
          <Icon7 width={24} height={24} />

          <div className="grow">
            <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
              プレミアム会員
            </p>
            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
              {(
                ((countP && countP.count && countP.count) /
                  (count && count.count && count.count)) *
                100
              ).toFixed(1)}
              %{" "}
            </h3>
            <div className="mt-1 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                プレミアム会員数{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200"></span>
              </p>
              <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {countP && countP.count && countP.count.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </a>
      {/* <!-- End Card --> */}

      {/* <!-- Card --> */}
    </div>
  );
};
export default Counter;
