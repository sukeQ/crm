import { Icon1 } from "@/components/icon/Icon1";
import { Icon2 } from "@/components/icon/Icon2";
import { Icon3 } from "@/components/icon/Icon3";

const List = () => {
  return (
    <>
      <div className="flex">
        {/* <!-- Icon --> */}
        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
          <Icon1 width={"2em"} height={"2em"} />
        </span>
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
            会員種別
          </h3>
          <div className="mt-1 text-lg sm:text-lg font-semibold text-gray-600 dark:text-gray-400">
            プレミアム会員
          </div>
          <div className="mt-1 text-base text-gray-600 dark:text-gray-400">
            購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額購
          </div>
        </div>
      </div>
      {/* //   <!-- End Icon Block --> */}

      {/* //   <!-- Icon Block --> */}
      <div className="flex">
        {/* <!-- Icon --> */}
        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
          <Icon2 />
        </span>
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
            購入総額
          </h3>
          <div className="mt-1 text-lg sm:text-lg font-semibold text-gray-600 dark:text-gray-400">
            5,555,555円
          </div>
          <div className="mt-1 text-base text-gray-600 dark:text-gray-400">
            購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額
          </div>
        </div>
      </div>
      {/* //   <!-- Icon Block --> */}
      <div className="flex">
        {/* <!-- Icon --> */}
        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
          <Icon3 />
        </span>
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
            顧客様メモ
          </h3>
          <div className="mt-1 text-base text-gray-600 dark:text-gray-400">
            購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額購入総額
          </div>
        </div>
      </div>
      {/* //   <!-- End Icon Block --> */}
    </>
  );
};
export default List;
