import { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav
                    className="navbar navbar-expand-lg  fixed sticky-top p-3"
                    style={{ backgroundColor: '#20232F' }}>
                    <div className="container container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <a className="text-white judul-header p-5 navbar-brand" href="#">
                                    Portfolio.
                                </a>
                            </div>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6 item-header">
                                    <div className=" navbar-collapse" id="navbarTogglerDemo02">
                                        <ul className="text-right gap-4 navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a href="#"
                                                    className="nav-link text-white "
                                                    aria-current="page">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="#about"
                                                    className="nav-link text-white">
                                                    About
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="#services">
                                                    Services
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="#portofolio">
                                                    Portfolio
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="#contact">
                                                    Contact
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </Fragment >
        );
    }
}

export default Header;