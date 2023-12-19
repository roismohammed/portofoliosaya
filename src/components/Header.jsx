import { Fragment, useState } from "react";
import './Header.css'
export default function Header() {
    const [header, setHeader] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    window.addEventListener('scroll',() => {
        changeNavbar()
    })
    return (
        <Fragment>
            <nav className={header ? 'stiky-header navbar fixed-top navbar-expand-lg bg-body-tertiary navbar-dark p-3 shadow-sm' : 'navbar fixed-top navbar-expand-lg  p-3 bg-body-tertiary navbar-dark '}>
                <div className="container">
                    <a className="navbar-brand judul-header mx-md-5 " href="#" style={{ color: '#02E7FD',fontSize:'25px' }}>
                        Roess
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-5 mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item" >
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: '#02E7FD' }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    Project
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}