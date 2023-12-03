import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  [x: string]: any;
  userStatus: { name: string; role: string; shop: string; futabayaID: number };
}

type State = {
  email: string;
};
type Action = {
  emailSet: (email: string) => void;
};

export const userEmail = create<State & Action>()((set) => ({
  email: "",
  emailSet: (email) => set((state) => ({ email: email })),
}));

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    userStatus: { name: "", role: "", shop: "", futabayaID: 0 },
    spUserSt: {},
    userSet: (status: any) => set((state) => ({ userStatus: status })),
    spUserStSet: (status: any) => set((state) => ({ spUserSt: status })),
    reset: () =>
      set({ userStatus: { name: "", role: "", shop: "", futabayaID: 0 } }),
    resetSpUserSt: () =>
      set({
        spUserSt: {
          email: "",
          firebaseUid: "",
          futabayaID: "",
          id: "",
          joinAtFutabaya: null,
          role: "",
          shop: "",
          shopId: null,
          user_name: "",
        },
      }),
  }))
);
