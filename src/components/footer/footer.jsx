import "./footer.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className="footer1">
                <Card id="footerCard" className="text-center">
                    <Card.Header> DR Ahmed</Card.Header>
                    <Card.Body>
                        <Card.Title>Specialist in general and laparoscopic
                            surgery</Card.Title>
                        <Card.Text>
                            <div className="social">     
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaLinkedin /></a>
                                <a href=""> <FaGithubSquare /></a></div>

                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted">@copyrights 2024   @by: Ahmed Farghaly </Card.Footer>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>

        </>
    )
}
export default Footer