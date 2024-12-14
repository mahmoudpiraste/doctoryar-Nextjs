
import AuthContext from '@/context/AuthContext';
import React from 'react'
import { useState, useContext } from 'react'
import { toast } from 'react-toastify';

export default function login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {login, loading} = useContext(AuthContext);


    const handelLogin = async () =>{
        if (email == '' || password == ''){
            toast.error("تمامی فیلدها الزامی هستند" ,{
                autoClose:3000,
            })
            return;
        }

        await login({email, password})
    }

  return (
   
    <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                    <h1 className='fs-3'>ورود به داشبورد</h1>
                        <a href="https://farawebdata.ir" className="">
                            <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>دکتریار</h3>
                        </a>
                        
                    </div>
                    <div className="form mb-3 ">
                        <label className="text-start">ایمیل</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    </div>
                    <div className="form mb-4">
                        <label >رمز عبور</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                    <a href="">رمز عبور خود را فراموش کرده اید؟</a>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" >مرا به خاطر بسپار</label>
                        </div>
                        
                    </div>
                    <button onClick={handelLogin} type="submit" className="btn btn-primary py-3 w-100 mb-4">ورود
                    {loading && <div className="spinner-border spinner-border-sm ms-2"></div> }
                    </button>
                </div>
                <div className='d-flex align-items-center justify-content-center w-100 bg-dark rounded'>
                    <div className='mt-2'>
                    <span className='fs-6 text-white '>جهت تست و ورود به پنل</span>
                <p className='text-white mt-3 '>test@example.com</p>
                <p className='text-white '>password123</p>
                    </div>
                
                </div>
                
            </div>
        </div>
    </div>
    
  )
}
