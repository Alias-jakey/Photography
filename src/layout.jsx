import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar/MainNavbar";
import Footer from "./Footer/Footer";

export default function Layout(){
    return (
        <div>
            <MainNavbar/>
            <Outlet>

            </Outlet>
            <Footer/>
        </div>
    )
}