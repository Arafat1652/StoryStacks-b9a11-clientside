import Nav from "../Nav/Nav";
import Footer from "../Footer.jsx/Footer";
import { useLoaderData } from "react-router-dom";
import { AiTwotoneTag } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const loadedBook = useLoaderData();
  const [book , setBook] = useState(loadedBook)
  const {user} = useAuth()



  //   console.log("video book", book);
  const [startDate, setStartDate] = useState(new Date());
  const {
    _id,
    category,
    book_name,
    description,
    quantity,
    rating,
    author_name,
    image,
    content,
  } = book;

//   useEffect(() => {
//     setBook(loadedBook);
//     console.log('this is from useeffect');
//   }, [loadedBook]);

console.table(book);
  const borrowDate = new Date() 
  const returnDate = startDate;

  const handleBorrowSubmit = e =>{
    

    const borrowBookData = {
        bookId:_id,
        image,
        book_name,
        category,
        borrowDate,
        returnDate,
        user_email: user?.email,
        user_name: user?.displayName
    }
    console.table(borrowBookData);
    fetch(`${import.meta.env.VITE_API_URL}/borrows`, {
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(borrowBookData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
        toast.success('Your borrowed this book succefully')

        }
      })
  }

//   console.log('date',startDate);
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
                <h2 className="text-4xl lg:mt-6 font-bold mb-2">{book_name}</h2>
                <div className="my-3">
                  <span className="font-bold mr-1">
                    Author : <span className="font-normal">{author_name}</span>
                  </span>
                </div>
                <h3 className="flex items-center text-lg font-bold gap-2 text-[#13e5c0]">
                  <AiTwotoneTag className="fill-[#13e5c0]"></AiTwotoneTag>
                  {category}
                </h3>
                <hr className="my-4" />
                <p className=" mb-4">
                  <span className="font-bold">Description : </span>{" "}
                  {description}
                </p>
                <hr className="my-4" />
                <div className="flex gap-4 mt-4">
                  <h3 className="flex items-center text-lg gap-1">
                    <FaRegStar className="text-purple-400"></FaRegStar>
                    {rating}
                  </h3>
                  <h4 className=" flex items-center text-lg gap-1">
                  <span className="font-bold mr-1 "> Quantity : </span> {quantity}
                  </h4>
                </div>
                <hr className="my-4" />
                <div>
                  <span className="font-bold mr-1 ">
                    Content : <span className="font-normal">{content}</span>
                  </span>
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      disabled={quantity === 0}
                      className="disabled:cursor-not-allowed  btn btn-primary mt-4 px-10"
                    >
                      Borrow
                    </button>
                    {/* modal */}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box p-20">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        {/*  */}
                        <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
                          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
                            Borrow A Book
                          </h2>

                          <form onSubmit={handleBorrowSubmit}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                              <div>
                                <label
                                  className="text-gray-700 "
                                  htmlFor="price"
                                >
                                  Name
                                </label>
                                <input
                                  id="price"
                                  type="text"
                                  disabled
                                  defaultValue={user.displayName}
                                  name="name"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label
                                  className="text-gray-700 "
                                  htmlFor="emailAddress"
                                >
                                  Email Address
                                </label>
                                <input
                                  id="emailAddress"
                                  defaultValue={user.email}
                                  type="email"
                                  name="email"
                                  disabled
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                />
                              </div>

                              <div className="flex flex-col gap-2 ">
                                <label className="text-gray-700">
                                  Return Date
                                </label>

                                {/* Date Picker Input Field */}
                                <DatePicker
                                  className="border p-2 rounded-md"
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                            </div>

                            <div className="flex justify-end mt-6">
                              <button
                                type="submit"
                                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </section>
                        {/*  */}
                      </div>
                    </dialog>
                    {/* modal */}
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
