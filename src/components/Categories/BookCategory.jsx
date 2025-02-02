import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BookCategory = ({ cate }) => {
  const { _id, image, category } = cate;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories/${category}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  }, [category]);
  // bg-[#fff3f3] bg-[#d7edd8]
  return (
    <Link
      to={`/bookItem/${category}`}
      className=" w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
    >
      <div className="p-4 relative ">
        <img
          className="rounded-xl scale-x hover:scale-x-[-1] lg:h-[250px] md:h-[350px] w-full object-cover object-center"
          src={image}
          alt="Dog"
        />
      </div>
      <div className="absolute inset-0 bg-[#653325] opacity-60 rounded-md"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-center p-3 text-3xl text-white font-bold">
          {category}
        </h3>
      </div>
    </Link>
  );
};

export default BookCategory;

