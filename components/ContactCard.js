import React from "react";
import ContactPNG from "../assets/contact.png"


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <a href="" className="ml-4 mt-4 font-weight-bold">Phone</a>

                    <a href="" className="ml-4 mt-4 font-weight-bold">Email</a>

                    <a href="https://www.linkedin.com/in/joseph-abdelfattah/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

                    <a href="https://github.com/josephabdelfattah" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                   
                </div>
            </div>
        </div >


    );
}

export default ContactCard;
