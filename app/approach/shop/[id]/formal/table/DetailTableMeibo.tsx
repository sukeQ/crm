import Link from "next/link";
import Tablebody from "./Tablebody";

const DetailTableMeibo = ({
  meibodata,
  title15,
  subtitle15,
  kakuyakudata,
  title16,
  subtitle16,
}: any) => {
  const resultMeibodata = meibodata && meibodata[0];
  const resultKakuyakudata = kakuyakudata && kakuyakudata[0];

  const TdA = (current: any, last: any) => {
    return (
      <>
        <span className="block p-0.5 text-xs text-gray-900">
          {current != 0 ? current : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {last != 0 ? last : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {last != 0
            ? Math.floor((current / last) * 100).toFixed(1) + "%"
            : "-"}
        </span>
      </>
    );
  };

  const td_style1 =
    "h-px w-16 px-1 text-sm text-right whitespace-nowrap bg-slate-50";
  const td_style2 = "h-px w-16 px-1 text-sm text-right whitespace-nowrap";
  return (
    <div className="max-w-[90rem] mb-10 px-2 py-5 sm:px-4 lg:px-4 lg:py-4 mx-auto">
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border-2 border-gray-300 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* <!-- Header --> */}

              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    名簿・確約
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    アプローチチェック表
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs w-8 font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          項目
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs text-gray-800 dark:text-gray-200">
                          4月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          5月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          6月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          7月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          8月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          9月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          10月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          11月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          12月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          1月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          2月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          3月
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          Q1
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          Q2
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          Q3
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          Q4
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          上期
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs  text-gray-800 dark:text-gray-200">
                          下期
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs w-1 font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          通期
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <Tablebody
                    resultdata={resultMeibodata}
                    title={title15}
                    subtitle={subtitle15}
                  />
                  <Tablebody
                    resultdata={resultKakuyakudata}
                    title={title16}
                    subtitle={subtitle16}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailTableMeibo;
