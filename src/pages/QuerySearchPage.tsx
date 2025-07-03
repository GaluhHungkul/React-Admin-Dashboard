import { useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const QuerySearchPage = () => {
  
  const [searchParams] = useSearchParams()
  
  const [myProducts, setMyProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [loadingGetProducts, setLoadingGetProducts] = useState(false)

  const navigate = useNavigate()

  const listProducts = useMemo(() => (
    myProducts.map(product => (
      <div key={product.id} className="p-4 duration-300 border rounded hover:scale-110 hover:bg-white/20">
        <p>Name : {product.title}</p>
        <p>Brand  : {product.brand}</p>
        <p>{product.category}</p>
        <p>Price : {product.price}</p>
      </div>
    ))
  ),[myProducts])


  useEffect(() => {
    const getData = async () => {
      try {
        setLoadingGetProducts(true)
        let query = ""
        if(searchParams.get("q")) query = `/search?q=${searchParams.get('q')}`
        const res = await fetch(`https://dummyjson.com/products${query}`)
        const { products }  = await res.json()
        setMyProducts(products || [])
      } catch (error) {
        console.log("Error : " , error)
        setMyProducts([])
        setLoadingGetProducts(false)
      } finally {
        setLoadingGetProducts(false)
      }
    }
    getData()
  },[searchParams])

  useEffect(() => {
  const timeout = setTimeout(() => {
    if (!searchQuery) {
      navigate("/querysearch", { replace: true });
    } else {
      navigate(`/querysearch?q=${searchQuery}`, { replace: true });
    }
  }, 750); // 500ms setelah berhenti ngetik

  return () => clearTimeout(timeout); // kalau user ngetik lagi sebelum 500ms, timeout dibatalkan
}, [searchQuery, navigate]);


  return (
    <div className="backdrop-blur-md">
      <div className="m-10 ">
        <input placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className="px-2 py-1 text-black rounded"/>
      </div>
        {loadingGetProducts ?
          <div className="grid grid-cols-2 gap-6 p-10 md:grid-cols-3 lg:grid-cols-4 ">
            {Array.from({ length : 16 }).map((val,i) => (
              <div key={i} className="w-64 h-32 p-4 duration-300 rounded bg-white/40 animate-pulse ">
                
              </div>
            ))}
          </div>
          : 
          <>
            {myProducts.length ?               
              <div className="grid grid-cols-2 gap-6 p-10 md:grid-cols-3 lg:grid-cols-4">
                {listProducts}
              </div> :   
            <h1 className="content-center text-center h-[50vh] font-bold text-3xl w-[80vw]">Product {searchParams.get("q")} kosong</h1>  
            }
          </> 
          
        }
        
    </div>
  )
}

export default QuerySearchPage