import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { AiTwotoneTag } from "react-icons/ai";


import Swal from "sweetalert2";


const BorrowedBooks = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [control, setControl] = useState(false)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myBorrows/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      });
  }, [user?.email, control]);


    const handleReturn =(_id , Id)=>{
        console.log(_id, Id);
        fetch(`${import.meta.env.VITE_API_URL}/return/${_id}?bookId=${Id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Return!",
                text: "book is Returned",
                icon: "success",
              });
              setControl(!control)
            }
          });
    }


//   console.log("borrwed books by user", borrowedBooks);

  return (
    <div className="px-2 md:px-2 lg:px-0">
     
      <div className="grid max-w-7xl my-24 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {borrowedBooks.map((item) => (
          <div
            key={item._id}
            className="card card-compact  group relative cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <figure>
              <img
                className="lg:h-[350px] md:h-[350px] w-full object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src={item.image}
                alt="Shoes"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.book_name}</h2>

              <p className="flex items-center font-bold">
                <AiTwotoneTag></AiTwotoneTag>{" "}
                <span className="ml-2 text-orange-400">{item.category}</span>
              </p>

              <hr />

              <p className="mb-2">
                <span className="font-bold"> Return Date : </span>
                {new Date(item.returnDate).toLocaleDateString()}
              </p>
              <p className="mb-2">
                <span className="font-bold"> Borrowed Date  : </span>
                {new Date(item.borrowDate).toLocaleDateString()}
              </p>

              <hr />

              <div
                className="card-actions w-full"
              >
                <button onClick={ () =>handleReturn(item._id, item.bookId)} className="btn bg-[#13e5c0] w-full text-white font-bold">
                  Return
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
