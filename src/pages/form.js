import React from "react";
import { Fragment } from "react";
import './form.css';
function Form() {
    return (
        <Fragment>
            <form className="form-sign">
                {/* ************start input from name******* */}
                <div className="pb-4">
                    <label className="labe" htmlFor="name">FULL NAME</label>
                    <input type="text" name="name"  placeholder="Enter your Full Name" />
                </div>
                {/* ************End input from name******* */}
                {/* ************start input from eamil******* */}
                <div className="pb-4">
                    <label className="labe" htmlFor="email address">Email ADDRESS</label>
                    <input type="email" name="email address" placeholder="Enter your Email" />
                </div>
                {/* ************End input from eamil******* */}
                {/* ************start input from PASSWORD******* */}
                <div className="pb-4">
                    <label className="labe" htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" placeholder="Enter your PASSWORD" />
                </div>
                {/* ************End input from PASSWORD******* */}
                <button type="submit" className="btn-sin">SIGN UP</button>
            </form>
        </Fragment>
    )
}
export default Form;