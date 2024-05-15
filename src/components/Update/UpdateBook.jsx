import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer.jsx/Footer";
import Nav from "../Nav/Nav";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateBook = () => {
  const { id } = useParams();
  //   console.log(id);
  const [books, setBooks] = useState({});
  const { user } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/singleBook/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        // console.log("single books", data);
      });
  }, [id]);
  //   console.log("booksboooks", books);

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const book_name = form.bookName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const author_name = form.author.value;
    const image = form.image.value;
    const user_email = user.email;

    const book = {
        book_name,
      category,
      rating,
      author_name,
      image,
      user_email,
    };

    console.log(book);

    fetch(`${import.meta.env.VITE_API_URL}/updateBook/${id}`,{
            method: 'PUT',
            credentials: 'include',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "updated succefully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 navigate('/all') 
            }
            if(data.message){
              toast.error(data.message)
            }
        })



  };

  return (
    <div style={{ backgroundImage: `url(https://s3.envato.com/files/208663800/02_misty-woods.jpg)`}} className="bg-cover bg-center">
      <Helmet>
        <title>{books.book_name}</title>
      </Helmet>
        <Nav></Nav>
      <div className="w-full max-w-md p-8 m-8 rounded-xl mx-auto  h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
        <h3 className="text-3xl font-bold text-center mb-8">Update Book</h3>
        <form onSubmit={handleUpdateBook}>
          {/* form book name */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="bookName"
                  defaultValue={books.book_name}
                  placeholder="Book Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form book category*/}
            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <div className="input-group">
                <select
                  name="category"
                  className="select select-bordered w-full"
                >
                  <option>Novel</option>
                  <option>Thriller</option>
                  <option>History</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                </select>
              </div>
            </div>
            {/*  */}
          </div>
          {/* form rating */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  max={5}
                  min={1}
                  name="rating"
                  defaultValue={books.rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form author */}
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="author"
                  defaultValue={books.author_name}
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row */}
          <div className="flex mb-5">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={books.image}
                  placeholder="Book Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form */}

          <input
            type="submit"
            value="Submit"
            className="btn btn-block text-xl bg-[#000000] text-[#ccff00]"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateBook;
