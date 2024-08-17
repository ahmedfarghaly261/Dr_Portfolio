import Header from "../../header/header"
import "./sec1.css"
import { Button } from "react-bootstrap"
import dr_img from "./img/dr_img.png"
import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sec1() {
    return (<>
        
        <div className="container">
            <div className="description">
                <div className="sec1">
                    <span className="right_sec" >
                        <h1> <b>welcome to </b> </h1>
                        <br />
                        <h1 className="name"> <b> Dr Ahmed Mohamed </b></h1>
                        <h2> <b> Specialist in general and laparoscopic <br /> surgery </b></h2>
                        <h5> Lorem ipsum, dolor sit amet consectetur adipisicing elit.  <br />Explicabo debitis dolor dolore voluptatem reprehenderit aut?</h5>
                      
                        <Link to={"/booking an appointment"} >   <Button className="but_sec1" ><b>Book an Appointment </b>  <FaShareSquare style={{ marginTop:"-10" }} />  </Button> </Link> 
                    </span>
                </div>
                <span className="left_sec" > <img src={dr_img} alt="" /> </span>
            </div>
        </div>
        <br />
        <br />
        <hr color="#8873ef" style={{ fontSize: "30px", height: "10px" }} />

    </>)
}
export default Sec1