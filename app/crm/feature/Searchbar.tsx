"use client";

import { supabase, supabaseCRM } from "@/utils/supabase/supabase";
import { useState } from "react";

const Searchbar = () => {
  const [searchword, setSearchword] = useState<String>();

  const handleSearch = async (e: String) => {
    console.log(e);
    if (e !== null) {
      const data = await supabaseCRM
        .from("customers_m")
        .select()
        .like("name", `%${e}%`);
      console.log("🚀 ~ file: Searchbar.tsx:12 ~ handleSearch ~ data:", data);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
        <svg
          className="flex-shrink-0 h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        id="icon"
        name="icon"
        onChange={(e: any) => handleSearch(e.target.value)}
        className="py-2 px-4 ps-11 pe-20 border-2 block w-92 md:w-96 bg-transparent border-gray-700 shadow-sm rounded-lg text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500"
        placeholder="お客様名"
      />
    </div>
  );
};
export default Searchbar;
