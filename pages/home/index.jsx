import React from "react";
import Carousel from "@/components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";

export default function Index() {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </>
  );
}
