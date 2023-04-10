import { useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState(["pizza"]);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]">Category</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Add a new Category..."
            onChange={(event) => setInputText(event.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary"
            onClick={() => {
              setCategories([...categories, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <div className="mt-10">
          {categories.map((categoryItem, index) => (
            <div className="flex justify-between mt-4" key={index}>
              <b className="text-xl">{categoryItem}</b>
              <button
                className="btn-primary !bg-danger"
                onClick={() =>
                  setCategories(categories.filter((category) => category !== categoryItem))
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;