import React from "react";
import Carousel from "@/components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

export default function Index({ categoryList, productList }) {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customers />
    </>
  );
}
