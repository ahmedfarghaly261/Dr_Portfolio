import { useEffect } from "react"
import Header from "../components/header/header"
import Sec1 from "../components/sections/section 1/sec1"
import Sec2 from "../components/sections/section 2/sec2"
import Sec3 from "../components/sections/section 3/sec3"
import Sec4 from "../components/sections/section 4/sec4"
import Sec5 from "../components/sections/section 5/sec5"
import "./dashboard.css"
import AOS from 'aos'
import "aos/dist/aos.css"
import Footer from "../components/footer/footer"
import NavBar from "../components/nav_bar/nav"
function Dashboard() {
    useEffect(() => {
     AOS.init({ duration: 2000 })
    }, []);
    return (
        <>
        <div className="nav" data-aos="fade-down"> 
            <NavBar/>
        </div>
            <div className="head" data-aos="fade-down">
                <Header />
            </div>
            <div className="sec-1" data-aos="fade-down">
                <Sec1 />
            </div>
            <div className="sec-2" data-aos="fade-up">
                <Sec2 />
            </div>
            <div className="sec-3" data-aos="zoom-out-down">
                <Sec3 />
            </div>
            <div className="sec-4" data-aos="zoom-out-left">
                <Sec4 />
            </div>
            <div className="sec-5" data-aos="fade-left">
                <Sec5 />
            </div>
            <br />
            <br />
            <div className="footer" data-aos="fade-left">
                <Footer />
            </div>
        </>
    )
}
export default Dashboard