import { Component } from "react";
import Guest from "../layouts/Guest";
import 'animate.css';
import './About.css'
class About extends Component {
    render() {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(50,55,68)' }}>
                <div className="container" id="about" >
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="about-foto pt-5"
                                src="src/img/rois.png" alt="" />
                        </div>

                        <div className="col-md-7 p-5 pt-5">
                            <div className="text-about text-white">
                                <h1
                                    data-aos="fade-down-left"
                                    data-aos-duration="1500"
                                    className="text">About<span style={{ color: '#02E7FD' }} > Me</span>
                                </h1>
                                <h4 data-aos="fade-left"
                                    data-aos-duration="1500"
                                    className="text">Frontend Developer!</h4>
                                <p data-aos="fade-left"
                                    data-aos-duration="1500" >data-aos-duration="1500"
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores commodi quibusdam eligendi culpa voluptatibus voluptate alias dolorum modi, molestiae aut est tempore repellat, libero cum quis doloremque eius a?
                                </p>
                            </div>

                            <div data-aos="fade-up-left"
                                data-aos-duration="1500" className=" pt-3 ">
                                <button className="tombol text">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;