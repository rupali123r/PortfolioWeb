import {Link } from "react-router-dom";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
    return (

        <>

            <div className="container-fluid p-0 m-0 f-img">
                <div className="overlay-1">
                    <div className="container pt-5">
                        <div className="row">
                            <section>
                                <div className="row">
                                    <h1>Contact</h1>

                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="contact-form">
                                            <form>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="Name" className="inp" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="email" placeholder="Email" className="inp" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="number" placeholder="Mobile No" className="inp" />
                                                </div>
                                                <div className="col-md-12">
                                                    <textarea rows={5} placeholder="say something...." className="inp"></textarea>
                                                </div>

                                                <div className="col-md-12">
                                                    <button className="inp">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">

                                        <div className="col-md-12 col-12">
                                            <ul className="contact-detail">
                                                <li>
                                                    <span><IoIosMail className="c-icon" /></span>
                                                    <p><strong>Email:</strong><a href="rupali3530rajput@gmail.com " className="contact-link">rupali3530rajput@gmail.com </a> </p>

                                                </li>

                                                <li>
                                                    <span><FaMobileScreenButton className="c-icon" /></span>
                                                    <p> <strong>Mobile No.:</strong><a href="+919303033170" className="contact-link"> +919303033170</a></p>

                                                </li>
                                                <li>
                                                    <span><FaLinkedinIn className="c-icon" /></span>
                                                    <p> <strong>Linkdin:</strong><a href="https://www.linkdin.com/in/rupali-rajput-a6b3002a5" className="contact-link">www.linkdin.com/in/rupali-rajput</a> </p>
                                                </li>
                                                <li>
                                                    <span><IoLogoGithub className="c-icon" /></span>
                                                    <p><strong>Github:</strong><a href="https://www.github.com/rupali123r" className="contact-link" >www.github.com/rupali123r</a> </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-12">
                                            <ul className="social-icon mt-3" >
                                                <li style={{ backgroundColor: "#fd5949" }}><IoIosMail className="s-icon" /></li>
                                                <li style={{ background: "#285aeb" }}><FaSquareInstagram className="s-icon" /></li>
                                                <li style={{ backgroundColor: "#3b5998" }}><IoLogoGithub className="s-icon" /></li>
                                                <li style={{ backgroundColor: "#0077b5" }}><FaLinkedinIn className="s-icon" /></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid f-color pt-3">
                <div className="container">
                   
                        <footer className="row" style={{ justifyContent: "space-between"}}>
                            <div className="col-md-4">
                                <div className="copy-right">
                                    <p>© 2023 Developer</p>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                            <div className="col-md-4">
                                
                                <p style={{textAlign: "right"}}>Designed By <Link to="" style={{color: "#fff", textDecoration: "none", textAlign: "right"}}>Rupali</Link></p>
                            </div>
                        </footer>
                   
                </div>
            </div>

        </>
    )

}
export default Footer;