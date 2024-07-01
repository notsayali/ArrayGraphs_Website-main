"use client";
import '../app/globals.css'
import Navbar from '../app/components/Navbar/index'
import Image from "next/image";
import Footer from '../app/components/Footer/index'

const About = () => {

return (
<div className="relative">
    <div>
    <Navbar />
    </div>
    <div className="justify-center items-center">
    <img src="/images/pharma/aboutbg.png" alt="Description of the image" className="w-full max-h-[270px] object-cover" />
</div>
    <div className="mx-auto max-w-12xl px-0 py-12 my-8 lg:px-20 bg-lightgrey  relative">
                <div className='grid grid-cols-1 md:grid-cols-2 my-0'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/pharma/meds.jpg" alt="man-icon" width={600} height={900} className="mx-auto md:mx-0" />
                    </div>
                    {/* COLUMN-2 */}
                    <div className="relative">
                        <br/>
                        <h1 className="text-2xl font-bold text-center md:text-left text-black">Risana : Built on Trust and Quality</h1>
                        <p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start">Risana Pharmaceuticals has rapidly positioned itself as a prominent player in the orthopedic, gynecological, diabetic, and cardiac segments. Our broad network and market presence reflect our commitment to quality and patient care.</p>

                        <p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start">We have become the preferred choice for many healthcare professionals and our robust Quality Management System ensures that we meet all regulatory requirements and market challenges with confidence.
We are continuously expanding our capabilities and enhancing our capacity to solidify our position as a leader in the pharmaceutical industry, dedicated to providing the best care for our patients.</p>
                    </div>

                </div>
            </div>
    <div>
        <Footer />
    </div>
      </div>
);
};

export default About;