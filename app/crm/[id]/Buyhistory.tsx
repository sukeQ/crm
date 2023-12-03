const Buyhistory = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                {/* <!-- Input --> */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="hs-as-table-product-review-search"
                    // className="sr-only"
                  >
                    購入商品リスト
                  </label>
                </div>
                {/* <!-- End Input --> */}

                <div className="sm:col-span-2 md:grow">
                  <div className="flex justify-end gap-x-2">
                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]"></div>

                    <div
                      className="hs-dropdown relative inline-block [--placement:bottom-right]"
                      data-hs-dropdown-auto-close="inside"
                    >
                      <button
                        id="hs-as-table-table-filter-dropdown"
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        商品登録
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        {" "}
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          No
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Product
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Reviewer
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Review
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Date
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Status
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                    <td className="h-px w-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <div className="flex items-center gap-x-4">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              1
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td className="h-px w-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <div className="flex items-center gap-x-4">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              2023-09-11
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td className="h-px w-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <div className="flex items-center gap-x-3">
                          <div className="grow">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              ブラウス
                            </span>
                            <span className="block text-sm text-gray-500">
                              複数購入
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td className="h-px w-72 min-w-[18rem] align-top">
                      <a className="block p-6" href="#">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                          memo
                        </span>
                        <span className="block text-sm text-gray-500">
                          必要であればメモ
                        </span>
                      </a>
                    </td>
                    <td className="h-px w-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          55,555,555円
                        </span>
                      </a>
                    </td>
                    <td className="h-px w-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                          <svg
                            className="w-2.5 h-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                          </svg>
                          Rejected
                        </span>
                      </a>
                    </td>
                  </tr>
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

export default Buyhistory;
