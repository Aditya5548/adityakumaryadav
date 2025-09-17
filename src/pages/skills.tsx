import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from 'next/image';
import spi from '../image/spi.png';
import barrownz from '../image/barrownz.png';
const skills = () => {
  return (
    <div>
      <Navbar />
      <section className="skillcontainer">
        <div className="container-fluid py-3">
          <h1 className="text-center">My Skills</h1>
          <div className="row d-flex justify-content-center">
            <div className="skillinside">
              <h5 className="bg-dark w-100 text-light py-2 text-center mt-2">Frontend Technologies</h5>
              <ul className="list-style">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>TAILWIND</li>
                <li>SASS or SCSS</li>
              </ul>
            </div>
            <div className="skillinside">
              <h5 className="bg-dark text-light py-2 text-center mt-2">Back-End Technologies</h5>
              <ul className="list-style">
                <li>PYTHON</li>
                <li>React, NextJS</li>
                <li>Express</li>
                <li>NodeJS</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="skillinside">
              <h5 className="bg-dark w-100 text-light py-2 text-center mt-2">Databases </h5>
              <ul className="list-style">
                <li>MongoDB</li>
                <li>Mysql</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <section className="traininginterncontainer">
        <h1 className="text-center py-2">Training & Internship</h1>
        <div className="container">
          <div className="d-flex gap-5 flex-wrap justify-content-center">
            <div className="trainingintern">
              <div className="trainingintern-header barrownz">
                <h4>barrownz Learning Academy</h4>
                <Image className="logo" src={barrownz} alt="profile" width={50} height={50} />
              </div>
              <div className="trainingintern-content">
                <h4>Summer Training</h4>
                <h6>Web Devlopment in Python</h6>
                <p>15 JULY 2024 - 8 Nov 2024</p>
                <Link href="/images/barrownz.png">Certificate Link</Link>
              </div>
            </div>

            <div className="trainingintern">
              <div className="trainingintern-header softpro">
                <h4>Softpro India</h4>
                <Image className="logo" src={spi} alt="profile" width={50} height={50} />
              </div>
              <div className="trainingintern-content">
                <h4>Summer Training</h4>
                <h6>Mern Stack</h6>
                <p>Sept 2024 - Nov 2024</p>
                <Link href="/images/softproindia.jpg">Certificate Link</Link>
              </div>
            </div>
          </div> 
        </div>
      </section>

    </div>
  )
}

export default skills