import Navbar from "@/components/Navbar"
import Image from 'next/image';
import image1 from '../image/school_1.png'
import image2 from '../image/school_2.png'
import image3 from '../image/school_1.png'
import image4 from '../image/school_4.png'

import image5 from '../image/college_1.png'
import image6 from '../image/college_2.png'
import image7 from '../image/college_3.png'
import image8 from '../image/college_4.png'
import image9 from '../image/college_5.png'

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid my-4">
        <section className='About-section-1'>
          <div className="row">
            <div>
              <h1>Schooling:</h1>
              <p>
                My schooling is from police modern school, gomti nagar lucknow & my school is affiliated from CBSE Board. my jaurney is start in this school in year 2019 from the class 9th and it will completed with my intermediate Education in the year 2022. <br />
                I have completed my high school with 69% marks in the year 2020 
                & intermediate is completed with 67.60% from the stream science with subjects ( Physics ,Chemistry ,maths ,Computer).
              </p>
              <div className="image-gallary">
                <Image src={image1} alt="image not found" width={300} height={250} />
                <Image src={image2} alt="image not found" width={300} height={250} />
                <Image src={image3} alt="image not found" width={300} height={250} />
                <Image src={image4} alt="image not found" width={300} height={250} />
              </div>
            </div>
            <div>
              <h1>Graduation:</h1>
              <p>
                Currently, I am doing my Graduation from goel Institute of Technology & Management,Lucknow. <br />
                My Graduation is start in the 2022 and it will be completed in the 2026. And current time i am in the 3rd Year. <br />
                My First year is completed with 81% mark or 8.16(SGPA). <br />
                My Second year is completed with 76% or 7.48(SGPA). <br />
              </p>
              <div className="image-gallary">
                <Image src={image5} alt="image not found" width={300} height={250} />
                <Image src={image9} alt="image not found" width={300} height={250} />
                <Image src={image7} alt="image not found" width={300} height={250} />
                <Image src={image8} alt="image not found" width={300} height={250} />
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default about
