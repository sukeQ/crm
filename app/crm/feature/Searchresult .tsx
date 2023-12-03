"use client";

import { searchword } from "@/app/store/search";
import Freemember from "@/components/icon/Freemember";
import Premiumember from "@/components/icon/Premiumember";
import { useCustomerSearch } from "@/hooks/useCustomerSearch";
import Link from "next/link";
import { useEffect, useState } from "react";

const Searchresult = () => {
  const [lists, setLists] = useState<any>();
  const word = searchword((state: any) => state.word);
  useEffect(() => {
    const datafetch = async () => {
      const data = await useCustomerSearch(word);
      setLists(data);
    };
    datafetch();
  }, [word]);

  return (
    <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    | {word}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    検索ワード
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <Link
                      className="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                        />
                      </svg>
                      お客様登録
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          会員
                        </span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          名前
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          住所
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          電話
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          担当
                          <br />
                          来店日
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 w-32 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          購入金額
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 w-52 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          メモ
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {lists &&
                    lists.map((list: any, index: number) => {
                      return (
                        <tr>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="ps-6 py-3">
                              <label
                                htmlFor="hs-at-with-checkboxes-1"
                                className="flex"
                              >
                                {list.rank == "1" ? (
                                  <Premiumember />
                                ) : (
                                  <Freemember />
                                )}
                              </label>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <Link href={`/crm/${list.id}`}>
                                <div className="flex items-center gap-x-3">
                                  <div className="grow">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                      {list.name}
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      {list.name_c}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {list.zip}
                              </span>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {list.address}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {list.phone}
                              </span>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {list.mobile}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {list.charg}
                              </span>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {list.buy_day}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-500">-</span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-500">
                                {list.memo}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {/* <!-- End Table --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
};
export default Searchresult;
