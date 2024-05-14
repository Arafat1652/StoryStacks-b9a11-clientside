import { useState } from "react";
import { AiTwotoneTag } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CardView = ({books}) => {
    const [cValue, setCValue] = useState(0);
    const [hValue, setHValue] = useState(undefined);
    return (
        <div className="grid max-w-7xl my-24 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
      
        
              {
            // eslint-disable-next-line react/prop-types
            books.map(item=>  <div key={item._id} className="card card-compact  group relative cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <figure>
              <img
              className="lg:h-[350px] md:h-[350px] w-full object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src={item.image}
                alt="Shoes"
                
              />
            </figure>
            
            <div className="card-body">
              <h2 className="card-title">{item.book_name}</h2>
              
              <div className="flex justify-around">
              <p className="flex items-center font-bold"><AiTwotoneTag></AiTwotoneTag> <span className="ml-2 text-orange-400">{item.category}</span></p>
                      <h3 className="flex items-center font-bold text-lg gap-1">
                      {[...Array(item.rating).keys()].map((r, index)=><FaRegStar key={index}
                        color={(hValue || cValue) > index ? "black" : "orange"}
                        onClick={() => setCValue(index + 1)}
                        onMouseOver={() => setHValue(index + 1)}
                        onMouseLeave={() => setHValue(undefined)}
                        style={{ cursor: "pointer" }}
                        ></FaRegStar>)
                        }
                      </h3>
                  </div>
             <hr />
              <p className=""><span className="font-bold">Author : </span>{item.author_name}</p>
              <p className=""><span className="font-bold">Quantity : </span>{item.quantity}</p>
             <hr className="mb-2"/>
              <Link to={`/update/${item._id}`} className="card-actions w-full">
              <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#000000] text-[#ccff00] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  update
                </button>
              </Link>
      
            </div>
          </div>)
        }
        </div>
    );
};

export default CardView;