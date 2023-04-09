import React from "react";
import Carousel from "@/components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";

export default function Index() {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </>
  );
}
