import "./sec4.css"
import profile from "./img/profile.png"
import { RiStarSFill } from "react-icons/ri";
function Sec4() {
    return (
        <>
            <section className="sec4">
                <div className=""> 
                    <center><h2>What our great cusomers say <br />
                    about  <span style={{color:"#8873ef"}}>Dr Ahmed</span> </h2> </center> 
                </div>
                <div className="container">
                    <div className="main4">
                        <div class="card">
                            <img src={profile}  alt="Card Image" />
                            <div class="card-content">
                                <span><h3>Lance Altman</h3> </span> <span> 4 stars</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure earum exercitationem adipisci quos nesciunt laboriosam culpa tempora unde atque facilis delectus doloribus quam, blanditiis dicta fugiat corrupti dolores perferendis dignissimos?.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={profile} alt="Card Image" />
                            <div class="card-content">
                                <h3>Marc Watson</h3>  <span style={{fontSize:"20px"}} > 4 <RiStarSFill style={{color:"#8873ef"}} /></span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis corporis similique culpa commodi ipsa quae, totam provident, blanditiis at magni temporibus soluta, necessitatibus natus. Maxime fugit dolorem in praesentium laudantium..</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={profile} alt="Card Image" />
                            <div class="card-content">
                                <h3>Jack Denel </h3>  <span style={{fontSize:"20px"}} > 4 <RiStarSFill style={{color:"#8873ef"}} /></span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis corporis similique culpa commodi ipsa quae, totam provident, blanditiis at magni temporibus soluta, necessitatibus natus. Maxime fugit dolorem in praesentium laudantium..</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={profile} alt="Card Image" />
                            <div class="card-content">
                                <h3>Sally Welch </h3> <span style={{fontSize:"20px"}} > 4 <RiStarSFill style={{color:"#8873ef"}} /></span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis corporis similique culpa commodi ipsa quae, totam provident, blanditiis at magni temporibus soluta, necessitatibus natus. Maxime fugit dolorem in praesentium laudantium..</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Sec4