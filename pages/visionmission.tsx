"use client";
import '../app/globals.css'
import Navbar from '../app/components/Navbar/index'
import Footer from '../app/components/Footer/index'


interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}
  
  const Aboutdata: datatype[] = [
    {
      heading: "Our Vision",
      imgSrc: "/images/aboutus/imgOne.svg",
      paragraph: "To become a leading global pharmaceutical company by providing high quality standard, affordable and innovative therapeutic solution towards society with diverse medical needs.",
    },
    {
      heading: "Our Mission",
      imgSrc: "/images/aboutus/imgThree.svg",
      paragraph: "To contribute for human health of national & International society, by offering quality of products, safe and effective to nature as well.",
    },
    {
      heading: "Our Aim",
      imgSrc: "/images/aboutus/imgTwo.svg",
      paragraph: "Our core commitment is towards improving health care and creating value for all our stakeholders including patients, doctors, regulators, employees and business partners.",
    },
  ];

const Vission = () => {

return (
<div className="mx-auto max-w-12xl pt-0 pb-0 px-0 lg:px-0">
    <div>
    <Navbar />
    </div>
    <div className="justify-center items-center">
    <img src="/images/pharma/visionbg.png" alt="Description of the image" className="w-full max-h-[270px] object-cover" />
</div>
      <div id="aboutus-section">
      <div className="mx-auto max-w-12xl px-0 py-12 my-8 lg:px-20 bg-lightgrey relative">
      <p className="font-medium text-lightblack text-xl text-center">
      We strive to transform the healthcare experience through innovative and patient-centered care, making a meaningful difference in the lives of those we serve. Our commitment to excellence drives us to continually advance our products and services, ensuring the highest standards of quality and trust.
</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-x-10 lg:gap-x-10">
    {Aboutdata.map((item, i) => (
      <div
        key={i}
        className="hover:bg-white bg-navyblue rounded-3xl pt-10 px-5 pb-5 shadow-xl group transform transition-transform hover:scale-105 mt-8"
      >
        <h4 className="text-center text-3xl font-semibold text-white mb-5 group-hover:text-black">
          {item.heading}
        </h4>
        <p className="text-center text-base font-normal text-white mb-10 group-hover:text-black">
          {item.paragraph}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
    <div>
        <Footer />
    </div>
    </div>
    );
}

export default Vission;