import ChannelPermonance from "../components/analytics/ChannelPerformance";
import Overviewcards from "../components/analytics/Overviewcards";
import RevenueChart from "../components/analytics/RevenueChart";
import Header from "../components/common/Header";
import ProductPerformance from "../components/analytics/ProductPerformance";
import UserRetention from "../components/analytics/UserRetention";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import {  DollarSign, ShoppingBagIcon, TrendingUp, UsersIcon } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto bg-gray-900">
      <Header title="Analytics" />
      <main className="px-4 mx-auto py-7 max-w-7xl lg:px-8">
        <Overviewcards />
        <RevenueChart />
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
            <ChannelPermonance />
            <ProductPerformance />
            <UserRetention />
            <CustomerSegmentation />
            <div className="col-span-2 p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl backdrop-filter backdrop-blur-lg">
              <h2>AI-Powered Insights</h2>
                <div className="flex flex-col gap-5 mt-3">
                  <div className="flex items-center gap-5"><TrendingUp size={24} color="rgba(0,180,0,1)"/> Revenue  is up to 12.5% compared to last month, driveb primarily by a successfull email campaign.</div>
                  <div className="flex items-center gap-5"><UsersIcon size={24} color="rgba(0,0,180,1)"/>Customer retention has improved by 2.5% following the launch of the new loyalty program.</div>
                  <div className="flex items-center gap-5"><ShoppingBagIcon size={24} color="rgba(180,0,180,1)"/>Product Category Electronics shows the highest growth potential based on recent market trends.</div>
                  <div className="flex items-center gap-5"><DollarSign size={24} color="rgba(180,180,0,1)"/>Optimizing pricing strategy could potentially increase overall profit margin by 5 - 7%</div>
                </div>
            </div>
        </div>
        
      </main>
    </div>
  );
};

export default AnalyticsPage;
