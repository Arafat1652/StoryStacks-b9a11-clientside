import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { useContext, useEffect, useState } from "react";
// import { RiBuilding2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../../assets/books.png'


const Nav = () => {
  
  const {user, logOut} = useContext(AuthContext)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector('html').setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeToogle = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('html').setAttribute('data-theme', newTheme);
  };

  // console.log(theme,'theme')

 
    const navLink = <>
    <li className="mr-4 font-semibold"><NavLink to='/'>Home</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/add'>Add Book</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/all'>All Books</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/borrowed'>Borrowed Books</NavLink></li>
</>

const handleLogOut =async()=>{
  await logOut()
  toast('log Out')
}

  return (
    <div className="bg-[#000000] text-[#ccff00] py-3">
        <div  className="navbar max-w-[98%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-gray-800 rounded-box w-52"
          >
         {navLink}
          </ul>
        </div>
        <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='text-xl font-ant'>StoryStacks</span>
        </Link>
      </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 ">
        {navLink}
        </ul>
      </div>
      <div className="navbar-end">
    {/* toagle */}

    <label className="swap swap-rotate mr-2">
    <input
              onChange={handleThemeToogle}
              type="checkbox"
              className=" theme-controller row-start-1 col-start-1 col-span-2"
              checked={theme === 'dark'}
            />
<svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

        {/* avatar */}
        {
          user ?   <>
          <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <div tabIndex={0} role="button" className="">  
                  <div className="avatar">
                      <div className="w-12 mt-3 rounded-full text-black">
                      <img src={user.photoURL} referrerPolicy='no-referrer'/>
                      </div>
                  </div>
                  </div>
              </div>
           <button onClick={handleLogOut} className="btn border-none hover:bg-[#ccff00] ml-4 font-bold px-4">Logout</button>
           </> :  <><Link to='/login'><button className="btn bg-[#ccff00] font-bold
            text-black px-6 border-none">LOGIN</button></Link>
                    </>
        }
    
        {/* avatar */}

      </div>
    </div>
    </div>
  );
};

export default Nav;


