"use client";

import { userStore } from "@/app/store/user";

const User = () => {
  const user = userStore((state: any) => state.user);
  const email = user.email;

  return <div>{email}</div>;
};

export default User;
