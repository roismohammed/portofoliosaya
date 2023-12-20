import { Component, Fragment } from "react";
import './Contact.css'
class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div id="contact" style={{ minHeight: '100vh' }} >
                    <div className="container">
                        <div className="row text-white p-5 d-flex justify-content-center">
                            <h1 data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1300" className="text-contact text-white  text-center">Contact<span style={{ color: '#02E7FD', fontWeight: 'bold' }} > Me!</span></h1>

                            <div className="col-md-6"
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1300" >
                                <label htmlFor=""></label>
                                <input type="text"
                                    placeholder="Full Name"
                                    className="form-control"
                                    id="myinput"
                                />
                                <label htmlFor=""></label>
                                <input type="text"
                                    placeholder="Email Address"
                                    className="form-control"
                                    id="myinput"
                                />

                                <label htmlFor=""></label>
                                <input type="text"
                                    placeholder="Email Subject"
                                    className="form-control "
                                    id="myinput"
                                />

                                <textarea
                                    name=""
                                    id="myTextarea"
                                    cols="20"
                                    rows="10"
                                    className="form-control"
                                    placeholder="Your Message"
                                ></textarea>
                                <div className="b-tombol">
                                    <button className=" tombol-contact " >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Contact;