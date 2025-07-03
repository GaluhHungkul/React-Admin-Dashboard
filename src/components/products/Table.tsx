import { motion } from "framer-motion";
import { Edit, SeparatorHorizontal, Trash2 } from "lucide-react";
import Pagination from "./Pagination";
import { Product } from "../../types/product";
import { useState } from "react";
import { usePagination } from "../../zustand/usePagination";
import ModalEditProduct from "./ModalEditProduct";
import { useEditProduct } from "@/zustand/useEditedProduct";
import { useQuery } from "@tanstack/react-query";

type useQuery = {
  products : Product[]
}

const Table  = () => {

  const { setProduct } = useEditProduct()
  const { page } = usePagination()
  const [open, setOpen] = useState<boolean>(false);

  const { data, isPending, error } = useQuery<useQuery>({
    queryKey : ["products", page],
    queryFn : () => fetch(`${import.meta.env.VITE_API_ADMIN_ENDPOINT}/products?page=${page}`).then(res => res.json()),
    placeholderData : p => p    
  })

  const handleShowModalEditProduct = (value:Product) => {
   setOpen(p => !p) 
   setProduct(value)
  }
  
  if(error) return <p>Error : {error.message}</p>
  if(isPending) return <p>Loading...</p>
  
  return (
    <>
      <ModalEditProduct open={open} setOpen={setOpen} />
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
              Category
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
              Stock
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.products?.map((product) => (
            <motion.tr
              key={product._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-700"
            >
              <td className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" className="mr-1 rounded-full size-10" alt="" />
                {product.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                {product.category}
              </td>
              <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                {product.price.toLocaleString("id-ID", { style: "currency",currency: "IDR",})}
              </td>
              <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                {product.stock}
              </td>
              <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                <button className="text-blue-400 hover:text-blue-500">
                  <Edit size={18} onClick={() => handleShowModalEditProduct(product)} />
                </button>
                <button className="ml-2 text-red-400 hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <Pagination loadingGetProducts={isPending} />
    </>
  );
};

export default Table;
