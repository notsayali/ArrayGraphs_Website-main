'use client'
import Image from "next/image";
import Link from 'next/link';

const Banner = () => {
  const scrolltojoinus = () => {
    const newsletterSection = document.getElementById("joinus");

    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<div className="mx-auto max-w-12xl pt-0 pb-0 px-0 lg:px-0">
<div className="flex justify-center items-center">
          <img src="/images/pharma/ortho01.png" alt="Description of the image" className="w-full max-h-96 object-cover" />
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-1 my-16">
      <div className="mx-auto sm:mx-0 text-center lg:text-center">
        <div className="sm:text-10x1 py-5 pt-0">
          <Link href="/brand">
          <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-10 py-3 rounded-3xl tracking-wider hover:text-white hover:bg-navyblue">
            RISANA PHARMACEUTICALS
          </button>
          </Link>
        </div>
        <div className="py-2">
          <h1 className="text-2xl sm:text-2xl font-bold text-center text-darkpurple" style={{ lineHeight: '1.3' }}>
            We are dedicated to delivering high-quality medicines at affordable prices.
          </h1>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;

//<button onClick={scrolltojoinus} className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-2 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
