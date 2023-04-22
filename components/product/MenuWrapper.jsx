import MenuItem from "./MenuItem";
import Title from "../ui/Title";
import { useState, useEffect } from "react";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [categoryList, productList, active]);

  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title className="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          {categoryList &&
            categoryList.map((category, index) => (
              <button
                className={`px-6 py-2  rounded-3xl ${
                  index === active && "bg-secondary text-white"
                }`}
                key={category._id}
                onClick={() => setActive(index)}
              >
                {category.title}
              </button>
            ))}
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">
        {filter.length > 0 &&
          filter.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MenuWrapper;