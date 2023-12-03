import Address from "./contents/Address";
import Birthday from "./contents/Birthday";
import Charge from "./contents/Charge";
import List from "./contents/List";
import Tel from "./contents/tel";

const Baseinfo = ({ data }: any) => {
  console.log("🚀 ~ file: Baseinfo.tsx:8 ~ Baseinfo ~ data:", data);
  const basedata = data && data[0];
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
        <div className="lg:col-span-5 lg:col-start-1">
          {/* <!-- Title --> */}
          <div className="mb-8">
            <h2 className="mb-2 text-2xl text-gray-800 font-bold lg:text-3xl dark:text-gray-200">
              {basedata && basedata.name}様
            </h2>
            <div className="flex">
              <div className="flex-col text-gray-600 dark:text-gray-400">
                {basedata && basedata.shopname}
              </div>
              <div className="flex-col ml-5 text-gray-600 dark:text-gray-400">
                {basedata && basedata.charg}
              </div>
            </div>
          </div>
          {/* <!-- End Title --> */}

          {/* tel birthday */}
          <div className="relative">
            <Address data={basedata && basedata} />
            <Tel data={basedata && basedata} />
            <Birthday data={basedata && basedata} />
            {/* <Charge /> */}
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
          <div className="space-y-6 sm:space-y-8">
            <List />
            {/* <!-- List --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default Baseinfo;
