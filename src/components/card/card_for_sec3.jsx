import "./card_for_sec3.css"
import { GiStomach } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaBone } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa"
import { GiNoseFront } from "react-icons/gi";

function Card_for_sec3() {
    return (<>
        <div className="container">
            <div class="ag-format-container">
                <div class="ag-courses_box">
                    
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link" style={{ textDecoration: "none" }}>
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title">
                          <center>  <GiStomach style={ { fontSize:"60px" }} /> </center>  
                           <center><h3> Gastrointestinal Surgery</h3> </center>
                           <p style={{fontSize:"17px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam non voluptatibus sunt distinctio dolores unde, cum natus totam tempora, accusamus, </p>
                            </div>
                            <div class="ag-courses-item_date-box">
                                Start:
                                <span class="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link" style={{ textDecoration: "none" }}>
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title">
                           <center> <FaAmbulance style={ { fontSize:"60px" }} /> </center>
                           <center><h3> Surgical Emergencies</h3> </center>
                           <p style={{fontSize:"17px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam non voluptatibus sunt distinctio dolores unde, cum natus totam tempora, accusamus, </p>
                            </div>
                            <div class="ag-courses-item_date-box">
                                Start:
                                <span class="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link" style={{ textDecoration: "none" }}>
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title">
                         <center> <FaPen style={ { fontSize:"60px" }} /></center>    
                         <center><h3> Gastrointestinal Surgery</h3> </center>
                         <p style={{fontSize:"17px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam non voluptatibus sunt distinctio dolores unde, cum natus totam tempora, accusamus, </p>
                            </div>
                            <div class="ag-courses-item_date-box">
                                Start:
                                <span class="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link" style={{ textDecoration: "none" }}>
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title">
                               <center> <FaBone style={ { fontSize:"60px" }} /> </center>
                               <center><h3> bone Surgery</h3> </center>
                               <p style={{fontSize:"17px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam non voluptatibus sunt distinctio dolores unde, cum natus totam tempora, accusamus, </p>
                            </div>
                            <div class="ag-courses-item_date-box">
                                Start:
                                <span class="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link" style={{ textDecoration: "none" }}>
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title">
                           <center> <FaBriefcaseMedical style={ { fontSize:"60px" }} /> </center> 
                            <center><h3> Medicean provider</h3> </center>
                            <p style={{fontSize:"17px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam non voluptatibus sunt distinctio dolores unde, cum natus totam tempora, accusamus, </p>
                            </div>
                            <div class="ag-courses-item_date-box">
                                Start:
                                <span class="ag-courses-item_date">
                                    30.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link" style={{ textDecoration: "none" }}>
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                               <center> <GiNoseFront style={ { fontSize:"60px" }} /> </center>
                               <center><h3> Nose Surgery</h3> </center>
                               <p style={{fontSize:"17px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam non voluptatibus sunt distinctio dolores unde, cum natus totam tempora, accusamus, </p>
                            </div>
                        </a>
                    </div>





                </div>
            </div>
        </div>
    </>)
}
export default Card_for_sec3
