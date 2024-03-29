import ChartBox from "../../components/chartBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import BarChartBox from "../../components/barChart/BarChartBox"
import PieChartBox from "../../components/pieChart/PieChartBox"
import { chartBoxUser, chartBoxConversion, chartBoxProduct, chartBoxRevenue, barChartBoxRevenue, barChartBoxVisit, pieChartData, bigChartData } from "../../data"
import "./home.scss"
import BigChartBox from "../../components/bigChart/BigChartBox"

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2"><ChartBox {...chartBoxUser} /></div>
            <div className="box box3"><ChartBox {...chartBoxConversion} /></div>
            <div className="box box4"><PieChartBox {...pieChartData} /></div>
            <div className="box box5"><ChartBox {...chartBoxRevenue} /></div>
            <div className="box box6"><ChartBox {...chartBoxProduct} /></div>
            <div className="box box7"><BigChartBox {...bigChartData} /></div>
            <div className="box box8"><BarChartBox {...barChartBoxRevenue} /></div>
            <div className="box box9"><BarChartBox {...barChartBoxVisit} /></div>
        </div>
    )
}

export default Home