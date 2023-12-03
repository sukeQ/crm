const Address = ({ data }: any) => {
  return (
    <ul className="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
      <li className="inline-flex items-center gap-x-2 py-2 px-4 text-sm font-medium text-gray-800 dark:text-white">
        〒 {data && data.zip}
      </li>
      <li className="inline-flex items-center gap-x-2 py-2 px-4 text-base font-medium text-gray-800 dark:text-white">
        {data && data.address}
      </li>
      <li className="inline-flex items-center gap-x-2 py-2 px-4 text-base font-medium text-gray-800 dark:text-white">
        {data && data.address2}
      </li>
    </ul>
  );
};
export default Address;
