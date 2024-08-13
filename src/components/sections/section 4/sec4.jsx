import "./sec4.css"
import profile from "./img/profile.png"
import { RiStarSFill } from "react-icons/ri";
import icon_img from "./img/icon_img.jpg"
function Sec4() {
    return (
        <>

            <div className="sec4">
                <div className="">
                    <center><h2> <b>What our great customers say  </b>
                        <br />
                        <b>about </b>
                        <span style={{ color: "#8873ef" }}> <b>Dr Ahmed </b>  </span> </h2>
                    </center>
                </div>
                <div className="main4">
                    <section className="sections ">
                        <div class="left_part">
                            <span class="commit_img">
                                <img src={icon_img}
                                    alt="" />
                            </span>
                            <div class="titel">
                                <h5> <b>Lance Altma </b> </h5>
                            </div>
                            <div style={{ color: "#2cbc63" }} class="rate"> <b><RiStarSFill style={{ color: "#45f882" }} /> 4.8 </b> </div>
                        </div>
                        <span class="commit_part">
                            <div class="commit"> Loremadasddasdasd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic voluptatum modi obcaecati eaque dicta dolores!  qui! </div>
                        </span>
                    </section>

                    <section className="sections ">
                        <div class="left_part">
                            <span class="commit_img">
                                <img src={icon_img}
                                    alt="" />
                            </span>
                            <div class="titel">
                                <h5> <b>Marc Watson </b> </h5>
                            </div>
                            <div style={{ color: "#2cbc63" }} class="rate"> <b><RiStarSFill style={{ color: "#45f882" }} /> 4.8 </b> </div>
                        </div>
                        <span class="commit_part">
                            <div class="commit"> Loremadasddasdasd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic voluptatum modi obcaecati eaque dicta dolores!  qui! </div>
                        </span>
                    </section>

                    <section className="sections ">
                        <div class="left_part">
                            <span class="commit_img">
                                <img src={icon_img}
                                    alt="" />
                            </span>
                            <div class="titel">
                                <h5> <b>Jack Denel </b> </h5>
                            </div>
                            <div style={{ color: "#2cbc63" }} class="rate"> <b><RiStarSFill style={{ color: "#45f882" }} /> 4.8 </b> </div>
                        </div>
                        <span class="commit_part">
                            <div class="commit"> Loremadasddasdasd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic voluptatum modi obcaecati eaque dicta dolores!  qui! </div>
                        </span>
                    </section>
                    <br />

                </div>

            </div>


        </>
    )
}
export default Sec4