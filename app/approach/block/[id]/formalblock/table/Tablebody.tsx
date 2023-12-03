"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabaseCRM } from "@/utils/supabase/supabase";

const Tablebody = ({ resultdata, title, subtitle }: any) => {
  const [shopname, setShopname] = useState<any>();
  const td_style1 =
    "h-px w-16 px-1 text-sm text-right whitespace-nowrap bg-slate-50";
  const td_style2 = "h-px w-16 px-1 text-sm text-right whitespace-nowrap";

  useEffect(() => {
    const datafetch = async () => {
      const { data: shopname } = await supabaseCRM
        .from("master_store")
        .select("name3")
        .eq("code1", resultdata[0].keyid);
      setShopname(shopname && shopname[0]);
    };
    datafetch();
  }, []);

  const data = resultdata && resultdata[0];
  return (
    <tr className=" bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
      <td className="h-px w-px text-xs whitespace-nowrap">
        <Link href={`/components/sectionmenu/ApCheck/shop/${data.keyid}`}>
          <span className="block ml-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            {shopname?.name3}
          </span>
          <span className="block ml-2 text-xm mt-1 text-gray-800 dark:text-gray-200">
            {subtitle}
          </span>
        </Link>
        <span className="block text-xs text-gray-500">{data.name3}</span>
        <span className="block text-sm text-gray-500">{data.name}</span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result4 != 0 ? data.result4 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result4_ly != 0 ? data.result4_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result4 / data.result4_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result4_ly != 0 && data.result4 != 0
            ? Math.floor((data.result4 / data.result4_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result5 != 0 ? data.result5 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result5_ly != 0 ? data.result5_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result5 / data.result5_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result5_ly != 0 && data.result5 != 0
            ? Math.floor((data.result5 / data.result5_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result6 != 0 ? data.result6 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result6_ly != 0 ? data.result6_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result6 / data.result6_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result6_ly != 0
            ? Math.floor((data.result6 / data.result6_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>
      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result7 != 0 ? data.result7 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result7_ly != 0 ? data.result7_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result7 / data.result7_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result7_ly != 0
            ? Math.floor((data.result7 / data.result7_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>
      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result8 != 0 ? data.result8 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result8_ly != 0 ? data.result8_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result8 / data.result8_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result8_ly != 0
            ? Math.floor((data.result8 / data.result8_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result9 != 0 ? data.result9 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result9_ly != 0 ? data.result9_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result9 / data.result9_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result9_ly != 0
            ? Math.floor((data.result9 / data.result9_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>
      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result10 != 0 ? data.result10 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result10_ly != 0 ? data.result10_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result10 / data.result10_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result10_ly != 0
            ? Math.floor((data.result10 / data.result10_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result11 != 0 ? data.result11 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result11_ly != 0 ? data.result11_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result11 / data.result11_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result11_ly != 0 && data.result11 != 0
            ? Math.floor((data.result11 / data.result11_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result12 != 0 ? data.result12 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result12_ly != 0 ? data.result12_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result12 / data.result12_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result12_ly != 0 && data.result12 != 0
            ? Math.floor((data.result12 / data.result12_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result1 != 0 ? data.result1 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result1_ly != 0 ? data.result1_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result1 / data.resulth1_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result1_ly != 0 && data.result1 != 0
            ? Math.floor((data.result1 / data.result1_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result2 != 0 ? data.result2 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result2_ly != 0 ? data.result2_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result2 / data.resulth2_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result2_ly != 0 && data.result2 != 0
            ? Math.floor((data.result2 / data.result2_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.result3 != 0 ? data.result3 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.result3_ly != 0 ? data.result3_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.result3 / data.resulth3_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.result3_ly != 0 && data.result3 != 0
            ? Math.floor((data.result3 / data.result3_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resultq1 != 0 ? data.resultq1 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resultq1_ly != 0 ? data.resultq1_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resultq1 / data.resultq1_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resultq1_ly != 0
            ? Math.floor((data.resultq1 / data.resultq1_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>
      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resultq2 != 0 ? data.resultq2 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resultq2_ly != 0 ? data.resultq2_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resultq2 / data.resultq2_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resultq2_ly != 0
            ? Math.floor((data.resultq2 / data.resultq2_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resultq3 != 0 ? data.resultq3 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resultq3_ly != 0 ? data.resultq3_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resultq3 / data.resultq3_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resultq2_ly != 0
            ? Math.floor((data.resultq3 / data.resultq3_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resultq4 != 0 ? data.resultq4 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resultq4_ly != 0 ? data.resultq4_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resultq4 / data.resultq4_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resultq4_ly != 0 && data.resultq4 != 0
            ? Math.floor((data.resultq4 / data.resultq4_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resulthy1 != 0 ? data.resulthy1 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resulthy1_ly != 0 ? data.resulthy1_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resulthy1 / data.resulthy1_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resulthy1_ly != 0 || data.resulthy1 != 0
            ? Math.floor((data.resulthy1 / data.resulthy1_ly) * 100).toFixed(
                0
              ) + "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resulthy2 != 0 ? data.resulthy2 : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resulthy2_ly != 0 ? data.resulthy2_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resulthy2 / data.resulthy2_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resulthy2_ly != 0 && data.resulthy2 != 0
            ? Math.floor((data.resulthy2 / data.resulthy2_ly) * 100).toFixed(
                0
              ) + "%"
            : "-"}
        </span>
      </td>

      <td className={td_style2}>
        <span className="block p-0.5 text-sm text-gray-900">
          {data.resultty != 0 ? data.resultty : "-"}
        </span>
        <span className="block p-0.5 text-xs text-gray-400">
          {data.resultty_ly != 0 ? data.resultty_ly : "-"}
        </span>
        <span
          className={
            Math.floor((data.resultty / data.resulthty_ly) * 100) / 100 >= 1
              ? "block p-0.5 text-xs text-blue-400"
              : "block p-0.5 text-xs text-red-400"
          }
        >
          {data.resultty_ly != 0 && data.resultty != 0
            ? Math.floor((data.resultty / data.resultty_ly) * 100).toFixed(0) +
              "%"
            : "-"}
        </span>
      </td>
    </tr>
    // );
    // })
  );
};
export default Tablebody;
