import {Outlet} from "react-router-dom"
import Navbar from "../../components/layout/dashboard/Navbar"

const DashboardPage = () => {
    return (
        <div className="bg-lightGray1 h-full flex gap-0  lg:gap-8 lg:pr-8 relative">
    
            <Navbar />
            <Outlet />
        </div>
    )
}

export default DashboardPage