
import Nav from '../Nav/Nav';
import Footer from '../Footer.jsx/Footer';
import { useLoaderData } from 'react-router-dom';
import { AiTwotoneTag } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { MdOutlineShoppingCart } from "react-icons/md";

const ViewDetails = () => {
    const book = useLoaderData()
    console.log('video book',book);
    const {
        category,
        book_name,
        description,
        quantity,
        rating,
        author_name,
        image,
        content,
      } = book

    return (
        <div>
        {/* <Helmet>
                 <title>{itemName} || ARTISAN</title>
             </Helmet> */}
        <Nav></Nav>
        {/* card */}
        
          <div className="bg-[#d7edd8] p-8 lg:p-24 w-[95%] mx-auto mt-2">
          {/* <Marquee>
            <div className=" flex gap-10 items-center">
            <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-7.png" alt="" />
            <img src="https://mobirise.com/extensions/personam4/assets/images/1.png" alt="" />
            <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-2.png" alt="" />
            <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-3.png" alt="" />
            
            <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-4.png" alt="" />
            <img src="https://mobirise.com/extensions/personam4/assets/images/2.png" alt="" />
            <img src="https://mobirise.com/extensions/personam4/assets/images/5.png" alt="" />
            <img src="https://mobirise.com/extensions/personam4/assets/images/3.png" alt="" />
           
            <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-6.png" alt="" />
            </div>
            </Marquee> */}
          </div>
        <div className="my-10">
          <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg  mb-4">
                    <img 
                      className="w-full h-full object-cover rounded-md"
                      src={image}
                      alt="Product Image"
                    />
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2  className="text-4xl lg:mt-6 font-bold mb-2">
                   {book_name}
                  </h2>
                 <div className='my-3'>
                 <span className="font-bold mr-1">
                        Author : <span className='font-normal'>{author_name}</span>
                      </span>
                 </div>
                  <h3  className="flex items-center text-lg font-bold gap-2 text-[#13e5c0]"><AiTwotoneTag className="fill-[#13e5c0]"></AiTwotoneTag>{category}</h3>
                  <hr className="my-4"/>
                  <p  className=" mb-4">
                   <span className='font-bold'>Description : </span> {description}
                  </p>
                  <hr className="my-4"/>
                  <div className="flex gap-4 mt-4">
                  <h3  className="flex items-center text-lg gap-1"><FaRegStar className="text-purple-400"></FaRegStar>{rating}</h3>
                  <h4  className=" flex items-center text-lg gap-1"><MdOutlineShoppingCart className="text-purple-400"></MdOutlineShoppingCart>{quantity}</h4>
              </div>
              <hr className="my-4"/>
                   <div >
                      <span className="font-bold mr-1 ">
                        Content : <span className='font-normal'>{content}</span>
                      </span>
                      <div>
                      <button className='btn btn-primary mt-4 px-10'>Borrow</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* card */}
  
        <Footer></Footer>
      </div>
    );
};

export default ViewDetails;