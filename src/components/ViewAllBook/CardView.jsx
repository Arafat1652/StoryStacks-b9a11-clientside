import { AiTwotoneTag } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CardView = ({books}) => {
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
                      <h3 className="flex items-center font-bold text-lg gap-1"><FaRegStar ></FaRegStar>{item.rating}</h3>
                  </div>
             
              <p className="mb-2"><span className="font-bold">Author : </span>{item.author_name}</p>
             
              <Link to={`/update/${item._id}`} className="card-actions w-full">
                <button className="btn bg-[#13e5c0] w-full text-white font-bold">Update</button>
              </Link>
      
            </div>
          </div>)
        }
        </div>
    );
};

export default CardView;