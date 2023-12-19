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
                                src="./rois.png" alt="" />
                        </div>

                        <div className="col-md-7 p-5 pt-5">
                            <div className="text-about text-white">
                                <h1
                                    data-aos="fade-down"
                                    data-aos-duration="1500"
                                    className="text">About<span style={{ color: '#02E7FD' }} > Me</span>
                                </h1>
                                <h4 data-aos="fade-down"
                                    data-aos-duration="1500"
                                    className="text">Frontend Developer!</h4>
                                <p data-aos="fade-left"
                                    data-aos-duration="1500" >
                                  Halo, nama saya Muhammad Rois. Saya seorang Junior Front-End Programmer dengan keahlian dalam pengembangan menggunakan bahasa pemrograman seperti JavaScript, Bootstrap, dan ReactJS. Saya juga memiliki pengalaman dalam merancang dan mengimplementasikan basis data, serta mengintegrasikan sistem dengan layanan pihak ketiga seperti API dan platform lainnya.
                                </p>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                className=" pt-3">
                                <button className="tombol text" id="tombol-about">
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