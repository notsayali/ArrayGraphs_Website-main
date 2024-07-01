'use client'
import Slider from "react-slick";
import React,{useState} from "react";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
}

const beliefsData: DataType[] = [
];
const BeliefsCarousel = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Disable autoplay to handle it manually
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: "linear",
    
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
        ]
    };
};


export default BeliefsCarousel;
