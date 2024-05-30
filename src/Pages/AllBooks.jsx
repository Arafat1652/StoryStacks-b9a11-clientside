import { useEffect, useState } from "react";
import CardView from "../components/ViewAllBook/CardView";
import TableView from "../components/ViewAllBook/TableView";
import { Helmet } from "react-helmet-async";


const AllBooks = () => {

    const [books, setBooks] = useState([])
    const [filter, setFilter] = useState(null || '')
    const [view, setView] = useState('card')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [searchType, setSearchType] = useState('book'); 
// console.log(crafts);
useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/books?filter=${filter}&search=${search}&searchType=${searchType}`, {credentials: 'include'})
    .then(res=>res.json())
    .then(data=>setBooks(data))
},[filter, search, searchType])



// for card and table view
const handleToggleView = (selectedView) => {
  setView(selectedView);
};

  // for show available book
  const handleAvailableBook =()=>{
    setFilter(true)
    // console.log('filter in handle', filter);
  }
  // console.log('filter out of handle', filter);

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }

  // console.log(search);
  console.log(searchType);



    return (
        <div className="px-2 md:px-2 lg:px-0">
           <Helmet>
                <title>All Books|| StoryStacks</title>
            </Helmet>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5">
        <button onClick={handleAvailableBook} className="btn">Show available books</button>
          <div>
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>

            <select
                  className='px-4 py-2 text-gray-700 bg-white border-r outline-none'
                    value={searchType}
                    onChange={e => setSearchType(e.target.value)}
                    >
                    <option value="book">Book</option>
                    <option value="author">Author</option>
              </select>

              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Search'
                aria-label='Search '
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#002369] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          </div>
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