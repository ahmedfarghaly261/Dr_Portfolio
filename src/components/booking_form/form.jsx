import Footer from "../footer/footer"
import Header from "../header/header"
import { CiFaceSmile } from "react-icons/ci";
import AOS from 'aos'
import "aos/dist/aos.css"
import "./form.css"
import { useEffect } from "react";
function Form() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (<>
        <div className="" > <Header /> </div>
        <div className="container" data-aos="fade-down">
            <div className="form_tit">
                <h2>book an appointment </h2> <br />
            </div>
            <br />
            <br />

            <div className="booking_form">

                <div class="main-block">
                    <div class="left-part">
                        <i class="fas fa-envelope"></i>
                        <i class="fas fa-at"></i>
                        <i class="fas fa-mail-bulk"></i>
                    </div>

                    <form className="main_form" action="/">
                        <h1> book an appointment  <CiFaceSmile /></h1>

                        <div className="">
                            <input className="info" type="text" name="name" placeholder=" Full name" />
                            <input className="info" type="text" name="name" placeholder="Email" />
                            <input className="info" type="text" name="name" placeholder="Phone number" />
                            <br />
                            <br />
                            <label htmlFor=""> <h5>date</h5></label>
                            <input className="info" type="date" name="name" placeholder="date" />
                            <label htmlFor=""> <h5>time </h5> </label>
                            <input className="info" type="time" name="name" placeholder="date" />
                        </div>

                        <h5>any Question</h5>
                        <div>
                            <textarea rows="4"></textarea>
                        </div>

                        <button className="form_button" type="submit" href="/">Submit</button>

                    </form>
                </div>

            </div>
        </div>

        <div className="" style={{ marginTop: "-300px" }}> <Footer /> </div>
    </>)
}
export default Form