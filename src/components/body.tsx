"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import image2 from '../image/Photo.jpg'
import Logo2 from '../image/logo-2.png'
import designingimg from '../image/designingimg.png'
import devloping from '../image/devlopmentimg.png'
import uidesigning from '../image/uidesigninglogo.png'
import { redirect } from 'next/dist/server/api-utils';
const Body = () => {
    const cardRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const element = cardRef.current;
            // set
            gsap.set('element', {
                opacity: 0,
                y: 50,
                scale: 1
            })
            // to
            gsap.to('element', {
                duration: 0.8,
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "power3.out"
            })
        })

        return () => ctx.revert()
    }, [])
    return (
        <div className='container-fluid'>
            <section className="section-two">
                <div className="row">
                    <div ref={cardRef} className="section-two-content col-md-7">
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
            <section className="section-three">
                <div className="row about">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <Image src={Logo2} alt="profile" width={250} height={250} />
                    </div>
                    <div className="col-md-7">
                        <h1>About me..</h1>
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
            <section className="section-4">
                <div className="expertise row">
                    <h2>My Zone of Expertise</h2>
                    <div className="col-md-3"><Image className="myphoto" src={designingimg} alt="profile" width={100} height={100} /><p>Web Devlopment</p></div>
                    <div className="col-md-3"><Image className="myphoto" src={devloping} alt="profile" width={100} height={100} /><p>Web Designing</p></div>
                    <div className="col-md-3"><Image className="myphoto" src={uidesigning} alt="profile" width={100} height={100} /><p>UI/UX Designing</p></div>
                    <h3 className=''>want any work to be done by me? <br /> <Link  href="/contactus" className='btn btn-primary'>contact me</Link></h3>
                </div>
            </section>
            {/* Pop-up Display */}
            <section className="d-none section-popup">
                <div className="popup-box">
                    <div className='w-100 text-end mt-2'><button className='btn'><i className="fa-solid fa-xmark"></i></button></div>
                    <div className="popup-content">
                        <h1>If you have a <br /> Project ?</h1>
                        <h3>Work together</h3>
                        <Link href='/contactus'>Contact Me</Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Body;
