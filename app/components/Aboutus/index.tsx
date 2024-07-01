import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "Medical Initiatives",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph: "We develop affordable, high-quality orthopedic and gynecological medications, ensuring accessible healthcare and improved patient outcomes.",
  },
  {
    heading: "Community Outreach",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph: "We are committed to giving back through various community outreach programs, promoting health awareness and access to medical care.",
  },
  {
    heading: "Quality Assurance",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph: "We maintain rigorous quality control measures to ensure every product meets the highest standards of safety and efficacy.",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">

      <div className="mx-auto max-w-12xl px-0 py-12 my-8 lg:px-20 bg-lightgrey  relative">
        
        <h4 className="text-center text-4xl lg:text-62xl font-bold">OUR COMMITMENT</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-x-10 lg:gap-x-30">
  {Aboutdata.map((item, i) => (
    <div
      key={i}
      className="hover:bg-navyblue bg-white rounded-3xl pt-10 px-5 pb-10 shadow-xl group transform transition-transform hover:scale-105 mt-8 flex flex-col items-center"
    >
      <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
      <h4 className="text-center text-3xl font-semibold text-black mb-5 group-hover:text-white">
        {item.heading}
      </h4>
      <p className="text-center text-base font-normal text-black mb-10 group-hover:text-white">
        {item.paragraph}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Aboutus;
