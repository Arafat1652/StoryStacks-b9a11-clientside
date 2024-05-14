import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Nav from "../Nav/Nav";
import Footer from "../Footer.jsx/Footer";
import axios from "axios";

// import { Helmet } from "react-helmet-async";


const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const [regError, setRegError] = useState('')
    const [successReg, setSuccessReg] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const { register,handleSubmit,formState: { errors },} = useForm()
      const onSubmit = (data) => {
        const {email, password,image, fullName} = data

        setRegError('')
        setSuccessReg('')
        if(!/@gmail\.com$/.test(email)){
            // setRegError('give a valid email')
            
            return toast.error('give a valid email')
        }
       else if(password.length<6){
            return toast.error('password must be 6 character or longer')
           
        }
        else if(!/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(password)){
            return toast.error('The password must contain at least one capital letter and one special character.')
           
        }
      

        createUser(email, password)
        .then(()=>{
           
            
            updateUserProfile(fullName, image)
            .then(()=>{
                const user = {email}
                console.log('user',user);
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user,{withCredentials: true})
                .then(res=> {
                  console.log(res.data);
                  if(res.data.success){
                    toast.success('Your Registration Succesfull')
                    navigate('/')
                  }
                }) 
            })
        })
        .catch(error=>{
            console.error(error)
            toast.error(error.code)
        })
      } 

    return (
        <div style={{ backgroundImage: `url(https://s3.envato.com/files/208663800/02_misty-woods.jpg)`}} className="bg-cover bg-center">
            {/* <Helmet>
                <title>Register || ARTISAN</title>
            </Helmet> */}
            <Nav></Nav>
           <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto text-gray-100 h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl font-bold text-center ">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block ">Name</label>
                <input type="text" name="username" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("fullName", { required: true })}  />
                {errors.fullName && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block ">Email</label>
                <input type="email" name="username" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block ">Photo URL</label>
                <input type="text" name="username" id="username" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("image", { required: true })}/>
                {errors.image && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm relative">
                <label htmlFor="password" className="block ">Password</label>
                <input type={showPassword? 'password': 'text'} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("password", { required: true })} />
                {errors.password && <span className="text-red-400">This field is required</span>}

                <span className="absolute top-9 right-4 text-black" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }</span>
            </div>
            <button className="block w-full p-3 text-center rounded-sm bg-[#000000] text-[#ccff00] ">Register</button>
        </form>

        <p className="text-green-500">{successReg}</p>
        <p className="text-red-400">{regError}</p>

        <p className="text-sm text-center sm:px-6 ">Already have an account?
            <NavLink to='/login' rel="noopener noreferrer" href="#" className="underline text-[#ccff00]"> Login</NavLink>
        </p>
    </div>
    <Footer></Footer>
     </div>
    );
};

export default Register;