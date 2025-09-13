import Navbar from "@/components/Navbar";
import Link from "next/link";
const skills = () => {
  return (
    <div>
      <Navbar />
      <div className="p-3">
      <h2>Skills</h2>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4">
            <h3>Frontend Technologies</h3>
            <ul className="list-style">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>TAILWIND</li>
              <li>SASS or SCSS</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Back-End Technologies</h3>
            <ul className="list-style">
              <li>PYTHON</li>
              <li>React, NextJS</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Databases: </h3>
            <ul className="list-style">
              <li>MongoDB</li>
              <li>Mysql</li>
            </ul>
          </div>
        </div>
      </div>
      <h2>Certificates</h2>
      <div className="container-fluid">
        <div>
          <div className="row">
              <ul className="list-style">
                <li>IBM – Data Science <Link href="/images/certificate_1.jpg">Certificate Link</Link></li>
                <li>IBM – Cloud Computing <Link href="/images/certificate_2.jpg">Certificate Link</Link></li>
                <li>LetsUpgrage – Html & CSS <Link href="/images/certificate_3.jpg">Certificate Link</Link></li>
                <li>LetsUpgrage – Python <Link href="/images/certificate_4.jpg">Certificate Link</Link></li>

              </ul>
              
          </div>
        </div>
      </div>
      <h2>Trainings & Internships </h2>
      <div className="container-fluid">
        <div className="d-flex flex-wrap">
          <ul className="list-style">
            <li><h3>Summer Training (MERN Stack)</h3></li>
            <li>Softpro India · Lucknow</li>
            <li>Sept 2024 – Nov 2024</li>
            <li><Link href="/images/certificate_5.jpg">Certificate Link</Link></li>
          </ul>

          <ul className="list-style">
            <li><h3>Summer Training (Python)</h3></li>
            <li>Barrownz Learning Academy · Lucknow</li>
            <li>Aug 2025 – Running</li>
            <li><Link href="">Certificate Link</Link></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default skills
