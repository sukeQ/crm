import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    email: "ssss@sample.com",
  },
  updateUser: (signinUser: any) =>
    set((state: any) => ({
      user: { ...state.user, signinUser },
    })),
}));
