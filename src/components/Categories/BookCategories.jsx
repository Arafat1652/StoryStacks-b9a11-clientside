import { useEffect, useState } from "react";
import BookCategory from "./BookCategory";


const BookCategories = () => {

    const [categories, setCategories] = useState([])
    // console.log(crafts);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/categories`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])


    return (
        <div className="max-w-7xl mx-auto my-24">
            <h3 className="text-3xl text-center font-bold">Book Categories</h3>
            <p className="lg:w-[650px] mx-auto  mb-10 text-center mt-3">With an array of supplies and tools at hand, this space ignites inspiration and fosters a sense of accomplishment as individuals bring their visions to life. </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">

            
            {
                
                    categories.map(cate=> <BookCategory key={cate._id} cate={cate}></BookCategory>)   
                
            }
            </div>
        </div>
        
    );
};

export default BookCategories;