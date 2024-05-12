import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddBook = () => {
  const { user } = useAuth();

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const book_name = form.bookName.value;
    const category = form.category.value;
    const description = form.description.value;
    const quantity = parseInt(form.quantity.value);
    const rating = form.rating.value;
    const author_name = form.author.value;
    const image = form.image.value;
    const content = form.content.value;
    const user_email = user.email;

    const book = {
      category,
      book_name,
      description,
      quantity,
      rating,
      author_name,
      image,
      content,
      user_email,
    };

    console.log(book);

    fetch(`${import.meta.env.VITE_API_URL}/books`, {
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your data added succefully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    })


  };

  return (
    <div>
      <div className="p-24 ">
        <h3 className="text-3xl font-bold text-center mb-8">Add Book</h3>
        <form onSubmit={handleAddBook}>
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
          {/* form book Description */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form book quantity */}
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
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
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Book Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form */}

          <div className="flex mb-5 w-full">
            <div className="form-control w-full">
              <label>Book Content</label>
              <br />
              <textarea
                id="content"
                className="border"
                name="content"
                rows="4"
                cols="49"
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            value="Add"
            className="btn btn-block text-xl bg-[#13e5c0]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBook;
