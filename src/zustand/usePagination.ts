import { create } from "zustand";

type usePagination = {
    page : number;
    maxPage : number;
    prevPage : () => void;
    nextPage : () => void;
    setMaxPage : (value:number) => void
}

export const usePagination = create<usePagination>()((set, get) => ({
    page : 1,
    maxPage : 5,
    prevPage : () => set({ page : get().page === 1 ? get().page : get().page - 1 }),
    nextPage : () => set({ page : get().page === get().maxPage ? get().page : get().page + 1}),
    setMaxPage : (value) => set({ maxPage : value })
}))
