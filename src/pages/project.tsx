import Navbar from "@/components/Navbar";
import Image from 'next/image';
import newImage from '../image/new.png';
import project1 from '../image/project_1.png'
import project2 from '../image/project_2.png'
import project3 from '../image/project_3.png'
import project4 from '../image/project_4.png'
import project5 from '../image/project_5.png'
import project6 from '../image/project_6.png'
import project7 from '../image/project_7.png'
const project = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="project-container">

                    <div className="project-items">
                        <div className="project-header">
                        <h4>Food Delivery</h4>
                        <Image src={project5} className="project-logo" alt="image not found" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            from this app we can order the food & also Designed admin panel for processing the food <br />
                            <b>Technologies Used:</b> HTML, CSS, JAVASCIPT, BOOTSTRAP & MERN
                        </div>
                        <button onClick={() => window.open("https://food-site-userapp.onrender.com/", "_blank")}>View</button>
                    </div>

                    <div className="project-items">
                        <div className="project-header">
                        <h4>Fitness App </h4>
                        <Image src={project4} className="project-logo" alt="image not found" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            in this app we can add our daily workout data and anlysis this data in daily ,weekly and monthly basis<br />
                            <b>Technologies Used:</b> HTML, CSS, JAVASCIPT, BOOTSTRAP & MERN
                        </div>
                        <button onClick={() => window.open("https://fitness-meter-project.vercel.app/", "_blank")}>View</button>
                    </div>

                    <div className="project-items">
                        <div className="project-header">
                        <h4>AKTU SGPA Calculator</h4>
                        <Image src={project7} alt="image not found" className="project-logo" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            fron this we can calculate our semester sgpa. <br />
                            <b>Tools Used:</b> HTML, CSS, JavaScript
                        </div>
                        <button onClick={() => window.open("https://aditya5548.github.io/GPA-Calculator/", "_blank")}>View</button>
                    </div>
                    

                    <div className="project-items">
                        <div className="project-header">
                        <h4>Age Calculator</h4>
                        <Image src={project6} alt="image not found" className="project-logo" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            by this we calculate our age  by putting our date of birth. <br />
                            <b>Tools Used:</b> HTML, CSS, JavaScript
                        </div>
                        <button onClick={() => window.open("https://aditya5548.github.io/Age-Calculator/", "_blank")}>View</button>
                    </div>

                    <div className="project-items">
                        <div className="project-header">
                        <h4>Weather-App</h4>
                        <Image src={project3} alt="image not found" className="project-logo" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            Real-time API Based Working Weather APP <br />
                            <b>Tools Used:</b> HTML, CSS, JavaScript
                        </div>
                        <button onClick={() => window.open("https://aditya5548.github.io/Weather-Update/", "_blank")}>View</button>
                    </div>

                    <div className="project-items">
                        <div className="project-header">
                        <h4>Running Calculator</h4>
                        <Image src={project2} alt="image not found" className="project-logo" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            Working Calculator Designed Based on Javascript <br />
                            <b>Tools Used:</b> HTML, CSS, JavaScript
                        </div>
                        <button onClick={() => window.open("https://aditya5548.github.io/Calculator/", "_blank")}>View</button>
                    </div>
                    
                    <div className="project-items">
                        <div className="project-header">
                        <h4>life of yuvraj Singh</h4>
                        <Image src={project1} alt="image not found" className="project-logo" width={150} height={100} />
                        </div>
                        <div className="p-3">
                            <b>Description:</b>
                            This project created by me in 10th class as a project of my subjective exam <br />
                            <b>Tools Used:</b> HTML, CSS
                        </div>
                        <button onClick={() => window.open("https://aditya5548.github.io/yuvraj-Singh/", "_blank")}>View</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default project
