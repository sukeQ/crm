const Charge = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Image Description"
          />
        </div>
        <div className="grow ms-4">
          <div className="font-semibold text-gray-800 dark:text-gray-200">
            新庄　丸々
          </div>
          <div className="text-xs text-gray-500">2023-09-02</div>
        </div>
      </div>
    </div>
  );
};
export default Charge;
