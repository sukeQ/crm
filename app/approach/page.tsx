import Link from "next/link";
import { Assignment } from "@/hooks/useUser";

export default async function expenses() {
  const filteredUsers = await Assignment();
  const post = filteredUsers[0][0].post;
  const shopid = filteredUsers[0][0].current_shopid;
  const futabayaid = filteredUsers[0][0].futabayaid;

  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* <!-- Grid --> */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
              営業行動表
            </h2>

            {/* <!-- Tab Navs --> */}
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              {(post == "店長" ||
                post == "副店長" ||
                post == "兼任ブロック長") && (
                <button
                  type="button"
                  className="hs-tab-active:bg-white border-2 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                  role="tab"
                >
                  <Link href={`/approach/shop/${shopid}`}>
                    <span className="flex">
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          店舗用　アプローチチェク表
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          アプローチチェック表店舗用メニューに進みます
                          <br />
                          副店長以上の権限で表示されます。
                        </span>
                      </span>
                    </span>
                  </Link>
                </button>
              )}

              {(post == "専任ブロック長" ||
                // post == null ||
                post == "兼任ブロック長") && (
                <button
                  type="button"
                  className="hs-tab-active:bg-white border-2 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                  role="tab"
                >
                  <Link href={`/approach/block/${futabayaid}`}>
                    <span className="flex">
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          ブロック長用　アプローチチェク表
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          アプローチチェック表ブロック長用メニューに進みます
                          <br />
                          副店長以上の権限で表示されます。
                        </span>
                      </span>
                    </span>
                  </Link>
                </button>
              )}

              <button
                type="button"
                className="hs-tab-active:bg-white border-2 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Link href={`/components/sectionmenu/ApCheck/kojin`}>
                  <span className="flex">
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        個人用　アプローチチェク表
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        アプローチチェック表個人用メニューに進みます
                        <br />
                        全ての方に表示されます
                      </span>
                    </span>
                  </span>
                </Link>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white border-2 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Link href={`/components/ftbApproach/Ap/manuals`}>
                  <span className="flex ">
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        マニュアル・関連資料リンク
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        アプローチチェック表に関連する
                        <br />
                        規定・マニュアル・関連資料をまとめています
                      </span>
                    </span>
                  </span>
                </Link>
              </button>
            </nav>
            {/* <!-- End Tab Navs --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-6">
            <div className="relative">
              {/* <!-- Tab Content --> */}
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src="https://images.un686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src="https://images.2-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>
              </div>
              {/* <!-- End Tab Content --> */}

              {/* <!-- SVG Element --> */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20"></div>
              {/* <!-- End SVG Element --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Background Color --> */}
        <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
        </div>
        {/* <!-- End Background Color --> */}
      </div>
    </div>
  );
}
