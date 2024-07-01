"use client";
import Image from "next/image";
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
      heading: "Wellmove TH",
      imgSrc: "/images/pharma/wellmoveth.png",
      paragraph: "Experience effective pain relief with our topical gel, designed to alleviate muscle and joint pain. Its advanced formula offers fast absorption for immediate relief and relaxation.",
    },
    {
      heading: "Meganxt HD",
      imgSrc: "/images/pharma/meganxthd.png",
      paragraph: "This medication addresses osteoarthritis, supports fracture healing, and is recommended for use during pregnancy and lactation with professional consultation.",
    },
    {
        heading: "Meganxt PRO",
        imgSrc: "/images/pharma/meganxtpro.png",
        paragraph: "This comprehensive protien supplement offers a blend of vitamins and minerals to support general health and wellness. Ideal for maintaining balanced nutrition and enhancing daily energy levels.",
      },
    {
      heading: "Maloxet",
      imgSrc: "/images/pharma/maloxet.png",
      paragraph: "Formulated to support relief from GERD and hyperacidity, this helps in maintaining a healthy acid balance and soothes the digestive system for improved gastrointestinal health.",
    },
    {
        heading: "Craftflex Nano",
        imgSrc: "/images/pharma/craftflexnano.png",
        paragraph: "Vitamin D supplement designed to support bone density, immune health, and overall vitality. A convenient way to help meet your daily Vitamin D requirements for optimal health.",
    },
    {
        heading: "Craftflex",
        imgSrc: "/images/pharma/craftflex.png",
        paragraph: "This nutritional supplement provides vital nutrients for maintaining healthy joints and preventing cartilage damage. Formulated with certain key ingredients for optimal bone and joint support.",
    },
  ];
  
const Brand = () => {

return (
<div className="mx-auto max-w-12xl pt-0 pb-0 px-0 lg:px-0">
    <div>
    <Navbar />
    </div>
    <div className="justify-center items-center">
    <img src="/images/pharma/brandbg.png" alt="Description of the image" className="w-full max-h-[270px] object-cover" />
</div>
      <div id="aboutus-section">

      <div className="mx-auto max-w-12xl px-0 py-12 my-8 lg:px-20 bg-lightgrey relative">
      <p className="font-medium text-lightblack text-xl text-center">
      Our products offer targeted solutions for orthopedic and gynecological care, addressing pain management, hormonal balance, and overall health. Through innovation and excellence, we strive to improve patient outcomes across all domains. </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-x-10 lg:gap-x-25">
    {Aboutdata.map((item, i) => (
      <div
        key={i}
        className="hover:bg-navyblue bg-white rounded-3xl pt-8 pl-5 pb-5 pr-5 shadow-xl group transform transition-transform hover:scale-200 mt-8"
      >
        <Image src={item.imgSrc} alt={item.imgSrc} width={400} height={400} className="mb-5 mx-auto block" />
        <p className="text-center text-base font-normal text-black mb-10 group-hover:text-white text-indent">
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

export default Brand;