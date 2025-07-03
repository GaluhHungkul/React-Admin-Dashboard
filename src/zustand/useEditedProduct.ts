import { Product } from "@/types/product";
import { create } from "zustand";

type useEditProduct = {
    product : Product | null;
    setProduct : (value:Product) => void;
}

export const useEditProduct = create<useEditProduct>()(set => ({
    product : null,
    setProduct : (val) => set({ product : val })
}))