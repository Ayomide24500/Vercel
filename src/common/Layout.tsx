import {Outlet} from "react-router-dom"
import DashboardHeaderHeader from "../static/DashboardHeader";
import Sidebar from "../static/Sidebar"
// import styled from "styled-components";
// import Footer from "./Footer";


const Layout = () => {
    return (
        <div>
           <DashboardHeaderHeader />
<div style={{display:"flex"}}>
        <Sidebar />
          <Outlet />
        </div>
        </div>
    )
}
export default Layout;

