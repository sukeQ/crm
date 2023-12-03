import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const userInfo = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: data } = await supabase.auth.getUser();
  const email = data.user?.email;
  const userinfo = await supabase.from("users").select().eq("email", email);
  let status = userinfo.data && userinfo.data[0];

  return [status.email, status.user_name, status.role];
};
