import { useEffect } from "react";
import { Link } from "react-router-dom";


const BookCategory = ({cate}) => {
    const {_id, image, category} = cate

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/categories/${category}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }, [category]);

    return (
        <Link to={`/bookItem/${category}`} className="bg-[#d7edd8] w-96 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                    <div className="p-4">
                      <img
                        className="rounded-xl scale-x hover:scale-x-[-1] lg:h-[250px] md:h-[350px] w-full object-cover object-center"
                        src={image}
                        alt="Dog"
                      />
                    </div>
                      <h3 className="text-center p-3 text-3xl text-[#3d626c] font-bold">{category}</h3>

                      <div className="text-center">
                      <button className="btn btn-primary ">See Books</button>
                      </div>
                  </Link>
    );
};

export default BookCategory;