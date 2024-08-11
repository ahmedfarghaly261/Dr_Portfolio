import { Button } from "react-bootstrap"
import "./sec2.css"
import img_sec2 from "./img/img_sec2.png"
import { FaShareSquare } from "react-icons/fa";
function Sec2() {
    return (<>
        <div className="page">
            <div className="container ">
                <div className="main">
                    <div className="right_sec2">
                        <span>
                            <h2> <b>  Dr Ahmed  </b></h2>
                            <br />
                            <h5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, sunt distinctio nam veniam repellat laborum unde consequatur totam molestiae placeat corporis vitae, omnis atque reprehenderit aliquid suscipit voluptatibus assumenda. Repellat.</h5>
                            <br />
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam ab sunt impedit? Quae ipsam consequatur quo, quasi, ratione eius molestiae aliquid expedita, tenetur quam nisi exercitationem odit at? Reiciendis!</h5>
                            <Button className="butt_sec2" > <h4> <b> Learn More </b> <FaShareSquare style={{ marginTop:"-10" }} /></h4></Button>
                        </span>
                    </div>
                    <span> <img className="img_sec2" src={img_sec2} alt="" /> </span>
                </div>
            </div>
            <br />
            <br />
        </div>

        {/* <hr color="#8873ef" style={{ fontSize: "30px", height: "10px" }} /> */}

    </>)
}
export default Sec2