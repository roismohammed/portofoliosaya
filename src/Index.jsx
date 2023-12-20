import { Component } from "react";
import Guest from "./layouts/Guest";
import './Index.css'
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import 'animate.css';
import About from "./pages/About";
class Index extends Component {
    render() {
        return (
            <Guest>
                <div style={{ minHeight: '100vh' }} className="container">
                    <div className="row">
                        <div className="col-md-8 p-5 mt-2">
                            <div className="box text-white">
                                <h3 data-aos="fade-down" className="text judul text-blue-600 animate__animated animate__slideInDown">Hello it's me</h3>

                                <h1 className="text nama animate__animated animate__fadeInUp">Muhammad Rois</h1>
                                <h3 className="text  animate__animated animate__slideInDown" >And i'm a
                                    <span style={{ color: '#02E7FD' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={[' Frontend developer', ' Creator Video', ' Editor Video ', ' Blogger!']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={80}
                                            deleteSpeed={70}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h3>
                                <p className="deskripsi  animate__animated animate__slideInDown ">""Saya seorang Software Engineer junior dari Indonesia yang menggunakan JavaScript dan Framework React.js" Saat ini, saya bekerja sebagai
                                    <p>Currently, I am working as</p></p>

                                {/* <ul className=" animate__animated animate__slideInDown ">
                                    <li> Founder Diskusi Koding. Platform for sharing about programming.</li>
                                    <li>
                                        How to reach me id.roismohammed@gmail.com
                                    </li>
                                </ul> */}
                                {/* <p className="  animate__animated animate__slideInDown ">Need a website or apps ? contact me to start business.</p> */}

                                <div className=" animate__animated animate__slideInDown bungkus-icon">
                                    <div className="menu-icon ">
                                        <a
                                            href="https://web.facebook.com/uhammadrois"
                                            className="index-icon">
                                            <RiFacebookFill />
                                        </a>
                                    </div>

                                    <div className="menu-icon ">
                                        <a
                                            href="https://www.instagram.com/roess___/"
                                            className="index-icon">
                                            <RiInstagramFill />
                                        </a>
                                    </div>

                                    <div className="menu-icon ">
                                        <a
                                            href="https://www.youtube.com/channel/UCN7HkTZtjILbDCQzzzHCeWg"
                                            className="index-icon">
                                            <RiTwitterFill />
                                        </a>
                                    </div>

                                    <div className="menu-icon ">
                                        <Link className="index-icon">
                                            <RiYoutubeFill />
                                        </Link>
                                    </div>
                                </div>

                                <div className=" animate__animated animate__slideInDown pt-3 ">
                                    <button className="tombol ">
                                        DOWNLOAD CV
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <img
                                width={'680px'}
                                className="potoku order-md-last"
                                src="./roes.png" />
                        </div>
                    </div>
                </div>
            </Guest>
        );
    }
}

export default Index;