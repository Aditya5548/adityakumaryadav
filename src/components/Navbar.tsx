import Image from "next/image";
import image1 from '../image/1.png';
import img1 from '../image/call_icon.png';
import img2 from '../image/whatsapp_icon.png';
import Link from "next/link";
const Navbar = () => {
    function togglebox() {
        let action = document.querySelector('.navbar-list') as HTMLElement;
        const togglebtnicon = document.querySelector('.toogle-btn i') as HTMLElement;
        if (action.style.display === 'none') {
            action.style.display = 'block';
            if (togglebtnicon) {
                togglebtnicon.classList = "fa-solid fa-xmark";
            }
        }
        else {
            action.style.display = 'none';
            if (togglebtnicon) {
                togglebtnicon.classList = "fa-solid fa-bars";
            }
        }
    }
    return (
        <section className="first-section">
            <div className="container-fluid navbar-container">
                <div className="navbar-image">
                    <div><Image src={image1} alt="Logo" width={120} height={40} /></div>
                    <div className="toogle-btn"><i className="fa-solid fa-bars" onClick={togglebox}></i></div>
                </div>
                <div className="navbar-list">
                    <ul className="navbar-links">
                        <li>
                            <Link href="/" className="link-tag">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="link-tag">About</Link>
                        </li>
                        <li>
                            <Link href="/skills" className="link-tag">Skils</Link>
                        </li>
                        <li>
                            <Link href="/project" className="link-tag">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contactus" className="link-tag">Contact</Link>
                        </li>
                        <li>
                            <Link href="/resume.pdf" className="btn btn-danger link-tag text-light border-0">Resume</Link>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
            <div className="assistant">
                <Link href="tel:+917376219758"><img className="img1 mx-2" src={img1.src} alt="" height={48} width={48}/></Link>
                <Link href="https://wa.me/+919005825347"><img className='img2' src={img2.src} alt=""  height={65} width={65} /></Link>
            </div>
        </section>
    );
};

export default Navbar;
