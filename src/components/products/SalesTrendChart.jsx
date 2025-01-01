import SalesOverviewChart from "../overview/SalesOverviewChart"

const SalesTrendChart = ({data, title, kataKunci}) => {
  return <SalesOverviewChart data={data} kataKunci={kataKunci} title={title}/>
}

export default SalesTrendChart