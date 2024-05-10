import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto bg-[#e8c1ba] sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col container mx-auto items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                The Easiest Way
                <br className="hidden md:block" />
                To Find{' '}
                <span className="inline-block text-deep-purple-accent-400">Any Book</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">Engage in lively discussions in our virtual book clubs, connect with fellow readers through online forums, and join  book signings from the comfort of your own home.</p>
            </div>
            <div className="flex items-center space-x-3">
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
            </div>
          </div>
          <div className="flex items-center w-full justify-center md:w-[80%] lg:w-1/2">
            <div className="w-[80%] ">
            <Swiper modules={[Navigation,Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
      }}
        pagination={{
          clickable: true,
        }}
      loop={true}>
            <SwiperSlide>
              <img className="object-cover" src="https://books.forbes.com/wp-content/uploads/2023/09/Richard-Sandler-Book-922x1024.png" alt="" />
              </SwiperSlide>
            <SwiperSlide>
              <img className="object-cover" src="https://www.jamesgreenblattmd.com/wp-content/uploads/2023/02/Answers-to-Anorexia-book-cover-NEW.png" alt="" />
              </SwiperSlide>
            <SwiperSlide>
              <img className="object-cover" src="https://www.swamipurnachaitanya.com/wp-content/uploads/2022/03/Looking-Inward-Book-768x873.png" alt="" />
              </SwiperSlide>


              </Swiper>
            </div>
          </div>
        </div>
        <a
          href="/"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </a>
      </div>
    );
};

export default Banner;

// https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small_2x/old-book-watercolor-illustration-png.png

// https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-the-books-clipart-vector-png-image_6653533.png