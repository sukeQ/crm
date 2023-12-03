import { supabase } from "@/utils/supabase/supabase";

// 現在の営業組織リストを返す
export const currentOrg = async () => {
  const { data: list } = await supabase.rpc("get_current_block001");
  return list;
};

export const currentChargeBlock = async (id: any) => {
  const { data: list, error: listerror } = await supabase.rpc(
    "get_current_block010",
    {
      futabayaid: id,
    }
  );
  return list;
};

export const member_being_history = async (futabayaID: string) => {
  const { data: list, error } = await supabase.rpc("member_being_history", {
    futabayaid: futabayaID,
  });
  return [list, error];
};

export const count_members = async (
  searchword: any,
  startdate: any,
  enddate: any
) => {
  const { data: list, error } = await supabase.rpc("count_current_members", {
    searchword: searchword,
    startdate: startdate,
    enddate: enddate,
  });
  return [list, error];
};
