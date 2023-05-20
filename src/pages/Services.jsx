import { Component } from "react";
import './Services.css'
import { RiBrushLine, RiFilmFill, RiCodeSSlashFill } from "react-icons/ri";

class Services extends Component {
    render() {
        return (
            <div id="services" style={{ minHeight: '100vh' }} >
                <div className="container">
                    <div className="row text-white p-5">
                        <h1 data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-services text-white  text-center">Our <span style={{ color: '#02E7FD', fontWeight: 'bold' }} > Services</span></h1>

                        <div className="col-md-4  pt-5 "
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                                {/* card */}
                            <div className="card text-center p-4 card-hover" style={{ backgroundColor: '#343745' }}>
                                <div className="card-body ">
                                    <div className=" text-center">
                                        <RiCodeSSlashFill className="icon-card" />
                                    </div>
                                    <h4 className="card-title  judul-card">Web Development</h4>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati corporis earum labore! Debitis, ipsam itaque eaque dolor voluptatibus at voluptatem optio dolore odio iste unde nobis veritatis illum fuga.
                                    </p>
                                    <a href="#" >
                                        <button className="tombol text">
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4  pt-5"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            {/* card */}
                            <div className="card text-center p-4 card-hover" style={{ backgroundColor: '#343745' }}>
                                <div className="card-body">
                                    <div className=" text-center">
                                        <RiBrushLine className="icon-card" />
                                    </div>
                                    <h4 className="card-title  judul-card">Graphic Desgin</h4>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt iure commodi provident facilis inventore omnis rerum id aut dolores repellat quis laboriosam hic, totam modi harum. Itaque, laboriosam cumque!
                                    </p>
                                    <a href="#" >
                                        <button className="tombol text">
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4  pt-5 "
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                                {/* card */}
                            <div className="card text-center p-4 card-hover" style={{ backgroundColor: '#343745' }}>
                                <div className="card-body">
                                    <div className=" text-center">
                                        <RiFilmFill className="icon-card" />
                                    </div>
                                    <h4 className="card-title judul-card">Editing Video</h4>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt iure commodi provident facilis inventore omnis rerum id aut dolores repellat quis laboriosam hic, totam modi harum. Itaque, laboriosam cumque!
                                    </p>
                                    <a href="#" >
                                        <button className="tombol text">
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;