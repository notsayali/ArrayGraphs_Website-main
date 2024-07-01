"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
   
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,

              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,

              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,

              },
            },
          ],
        };


        return (
            <div className="bg-wework py-20">

        
                </div>
        )
    }
}

