import "./sec5.css"
import sec5_img from "./img/sec5_img.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaShareSquare } from "react-icons/fa";
function Sec5() {
    return (<>
        <div className="container">
            <div className="tit">
                <h2>Have any questions ?</h2>
                <pre>      <h3> Just write us a message !</h3></pre>
            </div>
            <div className="poster">
                <img src={sec5_img} alt="" />
            </div>
            <span className="form">
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="full name" />
        <br />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
     
      <center>  <Button style={{backgroundColor:"#8873ef" , fontSize:"20px"}} type="submit">
        <b> Submit <FaShareSquare style={{ marginTop:"-10" }} /></b> 
      </Button></center>
    </Form>

            </span>


        </div>
    </>)
}
export default Sec5