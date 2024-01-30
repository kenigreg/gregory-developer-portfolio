import React from "react";

function Contact() {

    return (
        <div>
            <h1>Contact Page</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
        </div>

        </div>
    )
}


export default Contact;