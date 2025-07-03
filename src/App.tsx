import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/Sidebar"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"
import QuerySearchPage from "./pages/QuerySearchPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()


function App() {

  return (
   <div className='flex h-screen overflow-hidden text-gray-100 bg-gray-900'>

    {/* BG */}

    <div className="fixed inset-0 z-0" >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-900 via-gray-800 opacity-80"/>
      <div className="absolute inset-0 backdrop-blur-sm"/>
    </div>
    
    <Sidebar />
      <QueryClientProvider client={client}>
        <Routes>
          <Route path='/' element={<OverviewPage />} />
          <Route path='/products' element={<ProductsPage   />} />
          <Route path="/users" element={<UsersPage />}/>
          <Route  path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/querysearch" element={<QuerySearchPage />} />
        </Routes> 
      </QueryClientProvider>
   </div>
  )
}

export default App
