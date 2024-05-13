import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav/Nav";
import { AiTwotoneTag } from "react-icons/ai";
import {  FaRegStar } from "react-icons/fa";
import Footer from "../Footer.jsx/Footer";
import { useState } from "react";
// import React from 'react';
// import Rating from 'react-rating';


const BookItems = () => {
    const bookItems =useLoaderData() 
    
    // console.log('bookitemitemitem',bookItems);
    const [cValue, setCValue] = useState(0);
    const [hValue, setHValue] = useState(undefined);
    return (
        <div className="px-2 md:px-2 lg:px-0">
        
          <Nav></Nav>
          <div className="grid max-w-7xl my-24 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {
              bookItems.map(item=>  <div key={item._id} className="card card-compact  group relative cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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
                        
                        {/* rating */}

                        {/* rating */}
                    </div>
               <hr />
                <p className=""><span className="font-bold">Author : </span>{item.author_name}</p>
                <p className=""><span className="font-bold">Quantity : </span>{item.quantity}</p>
               <hr />   
                <Link to={`/details/${item._id}`} className="card-actions w-full">
                  <button className="btn bg-[#13e5c0] w-full text-white font-bold">View Details</button>
                </Link>
        
              </div>
            </div>)
          }
          </div>
          <Footer></Footer>
      </div>
    );
};

export default BookItems;