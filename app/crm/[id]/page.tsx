"use client";

import { useCustomerBaseinfo } from "@/hooks/useCustomerSearch";
import Baseinfo from "./Baseinfo";
import Buyhistory from "./Buyhistory";
import { useEffect, useState } from "react";
import { supabaseCRM } from "@/utils/supabase/supabase";

export default function ({ params: id }: { params: any }) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const datafetch = async () => {
      const basedata = await useCustomerBaseinfo(id.id);
      setData(basedata);
    };
    datafetch();
  }, []);

  return (
    <div>
      <Baseinfo data={data} />
      <Buyhistory />
    </div>
  );
}
