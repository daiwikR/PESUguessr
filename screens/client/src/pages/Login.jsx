import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import './login.css'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async(e) => {
    e.preventDefault()
    const { email, password } = data
    try{
      const {data}= await axios.post('/login',
      {email,password});
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({email:'',password:''})
        //navigate to the game page after login
        navigate('/gameplay')
        toast.success(data.message)
      }
  }
  catch(err){
      console.log(err)
  }
  }

  return (
    <div>
      <form onSubmit={loginUser} className='login-form'>
        <label>Email</label>
          <input type='email'  value={data.email} onChange={(e)=> setData({...data,email: e.target.value})}/>
          <label>Password</label>
          <input type='password' value={data.password} onChange={(e)=> setData({...data,password: e.target.value})}/>
        <button type='submit' className='btn'>Login</button>
      </form>
    </div>
  )
}

