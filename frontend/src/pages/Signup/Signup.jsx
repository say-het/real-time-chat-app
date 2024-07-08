
import { useState } from "react"
import GenderCheckBox from "./GenderCheckBox"
import { Link } from "react-router-dom"


const Signup = () => {
  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender:gender})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs) 
    
  }

  return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Signup 
            <span className="text-blue-300"> ChatApp</span>
            </h1>
              <div>
            <form onSubmit={handleSubmit}>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input value={inputs.username} onChange={(e)=>{setInputs({...inputs, username:e.target.value})}} type="text" className="w-full input input-bordered h-10"  placeholder="Enter Username"/>
                <label className="label p-2">
                  <span className="text-base label-text">Full Name</span>
                </label> 
                 <input value={inputs.fullName} onChange={(e)=>{setInputs({...inputs, fullName:e.target.value})}} type="text" className="w-full input input-bordered h-10"  placeholder="Enter Full Name"/>
                <label className="label p-2">
                  <span className="text-base label-text">Password</span>
                </label>
                <input value={inputs.password} onChange={(e)=>{setInputs({...inputs, password:e.target.value})}} type="password" className="w-full input input-bordered h-10"  placeholder="Enter Password"/>
                 <label className="label p-2">
                  <span className="text-base label-text">Confirm Password</span>
                </label> 
                <input value={inputs.confirmPassword} onChange={(e)=>{setInputs({...inputs, confirmPassword:e.target.value})}} type="text" className="w-full input input-bordered h-10"  placeholder="Enter Confirm Password"/>
                  <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                <Link to='/login' className="text-sm hover:underline mt-2 inline-block hover:text-blue-600">Already Have an Account?</Link>
                  <div>
                    <button type="submit" className="btn btn-primary w-full btn-sm mt-2">Signup</button>
                  </div>
            </form>
              </div>
        </div>
    </div>
  )
}

export default Signup