import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import image2 from '../image/Photo.jpg'
const Body = () => {
    useEffect(()=>{
        gsap.from(".section-two-content",{
            x: -150,
            duration: 1,
        });
        gsap.from(".myphoto",{
            x: 150,
            duration: 1,
        });
        gsap.from(".aboutme",{
            x: -400,
            duration: 2,
        });
        gsap.from(".personal-detail",{
            x: -500,
            duration: 1,
        });


    })
    return (
        <div>
            <section className="container section-two">
                <div className="row">
                    <div className="section-two-content col-md-7">
                        <h2>
                            Hey There ! <br />
                        </h2>
                        <h1>I'm Aditya Kumar <br /> Yadav</h1>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100065167030651">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/aditya_yadav9377?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/aditya-kumar-yadav-0272601bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/Adityakumar205?t=nH0-lVCqh0AIabnLbnjCww&s=09">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>

                        <div className="button-on-profile">
                            <a href="#" className="btn btn-danger">Hire Me</a>
                            <a href="tel:+919005825347" className="btn btn-danger">Call Me</a>
                        </div>
                    </div>
                    <div className="photo col-md-5">
                        <Image className="myphoto" src={image2} alt="profile" width={300} height={300} />
                    </div>
                </div>
            </section>

            <section className="container-fluid section-three">
                <div className="row about">
                    <div className="col-12">
                        <h1 className="aboutme">About me..</h1>
                        <p className='personal-detail'>
                            <i className="fa-solid fa-check"></i> Hi, I'm Aditya Kumar Yadav from Lucknow, Uttar Pradesh, India.
                            <br />
                            <i className="fa-solid fa-check"></i> Currently I am pursuing Graduation in
                            B.Tech Computer Science and Engineering from Goel Institute of Technology and Management, Lucknow.
                            & my Graduation will be completed in the year 2026.
                            <br />
                            <i className="fa-solid fa-check"></i> My love for coding always makes me eager to improve my
                            skills and expand my knowledge.
                            <br />
                            <i className="fa-solid fa-check"></i> I enjoy building responsive, user-friendly, and visually appealing
                            web applications using HTML, CSS, JavaScript, and various frameworks.
                            <br />
                            <i className="fa-solid fa-check"></i> As a software engineer, my goals are to continuously enhance my coding skills,
                            stay updated with industry trends, and contribute to innovative projects that make a positive impact.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Body;
