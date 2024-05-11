import Banner from "../components/Banner/Banner";
import BookCategories from "../components/Categories/BookCategories";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <BookCategories></BookCategories>
            </div>
        </div>
    );
};

export default Home;