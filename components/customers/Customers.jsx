import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Customers() {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-20">
      <Title className="text-[40px] text-center">What Says Our Customers</Title>
      <div className="flex gap-x-10">
        <Slider {...settings}>
          <CustomerItem src="/images/client1.jpg" />
          <CustomerItem src="/images/client2.jpg" />
          <CustomerItem src="/images/client1.jpg" />
          <CustomerItem src="/images/client2.jpg" />
        </Slider>
      </div>
    </div>
  );
}
