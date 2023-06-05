import { Component } from "react";
import './Portofolio.css'
class Portofolio extends Component {
    render() {
        return (
            <div id="portfolio" style={{ minHeight: '100vh',backgroundColor: 'rgb(50,55,68)' }} >
                <div className="container">
                    <div className="row portofolio text-white p-5">
                        <h1 data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-portofolio text-white  text-center">Latest <span style={{ color: '#02E7FD', fontWeight: 'bold' }} > Project</span></h1>

                        <div className="col-md-4"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                            <img src="./1.jpg" className="card-img-top " />
                            <img src="./2.jpeg" className="card-img-top" />


                        </div>

                        <div className="col-md-4"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                            <img src="./3.jpeg" className="card-img-top" />
                            <img src="./4.jpeg" className="card-img-top" />

                        </div>

                        <div className="col-md-4"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                            <img src="./5.jpeg" className="card-img-top" />
                            <img src="./6.png" className="card-img-top" />

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Portofolio;