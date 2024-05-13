import { useEffect, useState } from "react";
import CardView from "../components/ViewAllBook/CardView";
import TableView from "../components/ViewAllBook/TableView";
// import { AiTwotoneTag } from "react-icons/ai";
// import { FaRegStar } from "react-icons/fa";
// import { Link } from "react-router-dom";


const AllBooks = () => {

    const [books, setBooks] = useState([])
    const [view, setView] = useState('card')
// console.log(crafts);
useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/books`)
    .then(res=>res.json())
    .then(data=>setBooks(data))
},[])

const handleToggleView = (selectedView) => {
  setView(selectedView);
};

    return (
        <div className="px-2 md:px-2 lg:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5">
        <button className="btn">Show available books</button>
        <div className="dropdown ">
        <select className="bg-[#23BE0A] p-2 text-white font-bold" value={view} onChange={e => handleToggleView(e.target.value)}>
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>
        </div>
        {view === 'card' ? <CardView books={books} /> : <TableView books={books} />}
        
       
    </div>
    );
};

export default AllBooks;