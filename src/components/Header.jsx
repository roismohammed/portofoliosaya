import { Component, Fragment } from "react";
import './Header.css'
class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className=" shadow-sm navbar navbar-expand-lg fixed-top" id="header" style={{backgroundColor:'#20232F'}}>
                    <div className="container-fluid">
                        <a className="text-white judul-header navbar-brand" href="/">
                            Portfolio
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className=" item-header collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="gap-4 navbar-nav me-auto mb-2 mb-lg-0">
                                <li className=" nav-item">
                                    <a className="text-white nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-white nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="text-white nav-link "
                                        href="#services"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-white nav-link" href="#portfolio">
                                        Portfolio
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="text-white nav-link" href="#contact">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>


            </Fragment >
        );
    }
}

export default Header;