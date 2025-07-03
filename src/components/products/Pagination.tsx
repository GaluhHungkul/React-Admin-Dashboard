import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { FC } from "react";
import { usePagination } from "../../zustand/usePagination";

type Props = {
  loadingGetProducts: boolean;
};

const Pagination: FC<Props> = ({ loadingGetProducts }) => {
  
  const { page, nextPage, prevPage, maxPage } = usePagination();
  
  return (
    <div className="flex items-center justify-center gap-4 mt-8 text-2xl">
      <button
        disabled={page <= 1 || loadingGetProducts}
        className="rounded-full hover:brightness-75 active:brightness-50 disabled:brightness-50"
        onClick={prevPage}
      >
        <ChevronLeftCircle size={30} />
      </button>
      <span>{page}</span>
      <button
        disabled={page === maxPage || loadingGetProducts}
        className="rounded-full hover:brightness-75 active:brightness-50 disabled:brightness-50"
        onClick={nextPage}
      >
        <ChevronRightCircle size={30} />
      </button>
    </div>
  );
};

export default Pagination;
