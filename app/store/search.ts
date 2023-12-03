import { create } from "zustand";

export const searchword = create((set) => ({
  word: null,
  updateWord: (word: any) =>
    set((state: any) => ({
      word: word,
    })),
}));
