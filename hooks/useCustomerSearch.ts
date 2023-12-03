import { supabaseCRM } from "@/utils/supabase/supabase";

export const useCustomerSearch = async (word: string) => {
  const data = await supabaseCRM
    .from("customers_m")
    .select()
    .like("name", `%${word}%`);
  return data.data;
};

export const useCustomerBaseinfo = async (id: string) => {
  const data = await supabaseCRM.from("customers_m").select().eq("id", id);
  console.log(
    "🚀 ~ file: useCustomerSearch.ts:13 ~ useCustomerBaseinfo ~ data:",
    data
  );
  return data.data;
};
