import React from "react";
import Profile from "../assets/Profile.jpeg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div className="mt-3">

                    <p>I am a Developer</p>

                    <p>
                       
                 email:
                                                <a href="josephabdelfattah@gmail.com"
                            target="_blank">josephabdelfattah@gmail.com, </a> through<a
                                href="https://github.com/josephabdelfattah"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/joseph-abdelfattah/">
                            LinkedIn.</a>
                        ok

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/joseph-abdelfattah/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/josephabdelfattah" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
