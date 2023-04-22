import MenuItem from "./MenuItem";
import Title from "../ui/Title";
import { useState } from "react";

export default function MenuWrapper({ categoryList }) {
  const [active, setActive] = useState(0);

  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title className="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          {categoryList &&
            categoryList.map((category, index) => {
              return (
                <button
                  className={`px-6 py-2 rounded-3xl ${
                    index === active && "bg-secondary text-white"
                  }`}
                  key={index}
                  onClick={() => setActive(index)}
                >
                  {category.title}
                </button>
              );
            })}
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
