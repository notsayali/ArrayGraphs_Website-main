"use client";
import '../app/globals.css'
import Navbar from '../app/components/Navbar/index'
import Image from "next/image";
import Footer from '../app/components/Footer/index'

const Blog = () => {

return (
<div className="relative">
    <div>
    <Navbar />
    </div>
    <div className="justify-center items-center">
    <img src="/images/pharma/patientbg.png" alt="Description of the image" className="w-full max-h-[270px] object-cover" />
</div>
    <div className="mx-auto max-w-12xl px-0 py-12 my-8 lg:px-20 bg-lightgrey  relative">
    <p className="font-medium text-lightblack text-xl text-center">
    At Risana Pharmaceuticals, we are dedicated to providing more than just high-quality medications. Our commitment to patient care is reflected in our comprehensive initiatives designed to support, educate, and empower our patients and healthcare professionals. Discover how we strive to make a difference through our various programs and services.
</p>
<br/><br/>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-0'>
    {/* COLUMN-1 */}
    <div className="flex items-center justify-center">
        <Image src="/images/pharma/patient.png" alt="wellness mission" width={800} height={900} className="mx-auto md:mx-0" />
    </div>
    {/* COLUMN-2 */}
    <div className="flex flex-col space-y-6 p-4">
    <p className="font-medium text-lightblack text-xl text-center lg:text-start">
        Risana Pharmaceuticals is dedicated to making a positive impact in the community. Our outreach programs focus on providing health education, free medical check-ups, and support to underserved communities to improve overall health and well-being.
    </p>
    <p className="font-medium text-lightblack text-xl text-center lg:text-start">
        The programs are designed to extend our commitment to patient care beyond our products. In orthopedic care, we offer free health screenings and educational workshops to promote bone and joint health in the community. Our gynecological care programs include free health check-ups and seminars focused on women’s health topics. Similarly for diabetic care, we organize diabetes awareness events featuring free blood sugar testing and educational sessions on diabetes prevention and management.
    </p>
</div>
</div>
<p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start">
        We believe that patient care extends beyond just providing medications. Our dedicated support team offers comprehensive assistance to ensure that every patient receives the highest quality of care. From medication guidance to answering questions about our products, we are here to support you every step of the way.
    </p>
<p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start">
Our commitment to quality and safety is at the heart of everything we do. We adhere to the highest standards in pharmaceutical manufacturing and continually review and improve our processes to ensure that our products are safe, effective, and of the highest quality for our patients.
</p>
</div>
    <div>
        <Footer />
    </div>
</div>
);
};

export default Blog;