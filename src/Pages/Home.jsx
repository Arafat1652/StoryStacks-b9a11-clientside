import Banner from "../components/Banner/Banner";
import BookCategories from "../components/Categories/BookCategories";
import Hero from "../components/Herosection/Hero";
import Stats from "../components/Stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <BookCategories></BookCategories>
            </div>
            <Hero></Hero>
           <div>
           
           <Stats></Stats>
           </div>
        </div>
    );
};

export default Home;