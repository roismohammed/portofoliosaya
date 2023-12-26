import { Fragment } from "react";
import Header from "../components/Header";

export default function Guest({ children }) {
    return (
        <Fragment>
            {/* <Header/> */}
            <div className="container my-5" >
                { children}
            </div>
        </Fragment>
    )
}