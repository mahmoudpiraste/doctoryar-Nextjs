
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {  useRouter  } from 'next/router';
import PatentList from '../../../components/layout/patentlist';
// import AppointMentList from '../../../components/layout/appointmentlist';

export default function NewPatent() {
  const router = useRouter();

    const [mypateintname, setMypateintname] = useState('');
    const [mypateintlastname, setMypateintlastname] = useState('');
    const [mypateintphone, setMypateintphone] = useState('');
    const [mypateintnameemail, setMypateintnameemail] = useState('');
    const [mypateintinsurance, setMypateintinsurance] = useState('');
    const [mypateintinsnum, setMypateintinsnum] = useState('');
    const [mypateintnationalid, setMypateintnationalid] = useState('');

// console.log(mypateintname)
// console.log(mypateintlastname)
// console.log(mypateintphone)
// console.log(mypateintnameemail)
// console.log(mypateintinsurance)
// console.log(mypateintinsnum)
// console.log(mypateintnationalid)


    const handlerNewPateint = (e) =>{
        e.preventDefault()
      
        axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/patents/newpatent`, {
           mypateintname, mypateintlastname, mypateintphone, mypateintnameemail, mypateintinsurance, mypateintinsnum, mypateintnationalid
        })  
        .then(function(res) {
          console.log(res);
          router.push('/');
          toast.success("بیمار جدید تعریف شد")
      
        })
        .catch(function(err){
          console.log(err);
          toast.error("اطلاعات را دوباره بررسی کنید")
        })
       }



  return (
    <>
  
  <div className="container-main position-relative bg-white d-flex p-0 ">
     
     <div className=" content">
     <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                  
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded d-block align-items-center justify-content-between p-4">
                        <h1 className='fs-6 fw-bold'>تعریف مراجعه کننده جدید</h1>
                        <div className='mt-1'>
                          <p>مشخصات فردی</p>
                <input onChange={(e) => setMypateintname(e.target.value)} type="text" id="input-add" className="input-add" placeholder="نام" />
                <input onChange={(e) => setMypateintlastname(e.target.value)} type="text" id="input-add" className="input-add mx-3" placeholder="نام خانوادگی" />
                <input onChange={(e) => setMypateintphone(e.target.value)} type="number" id="input-add" className="input-add2" placeholder="شماره موبایل" />
                <input onChange={(e) => setMypateintnameemail(e.target.value)} type="text" id="input-add" className="input-add2 mx-3" placeholder="ایمیل" />
           
                </div>
                        <div className='mt-3'>
                          <p>مشخصات بیمه</p>
                <select onChange={(e) => setMypateintinsurance(e.target.value)} type="select" id="input-add" className="input-add"   >
  <option value="">نوع بیمه را مشخص کنید</option>
                <option value="آزاد">آزاد</option>
  <option value="تامین اجتماعی">تامین اجتماعی</option>
  <option value="خدمات درمانی">خدمات درمانی</option>
  <option value="نیروهای مسلح">نیروهای مسلح</option>
  <option value="طلایی">طلایی</option>
  <option value="سایر">سایر</option>
                </select>
                <input onChange={(e) => setMypateintinsnum(e.target.value)} type="number" id="input-add" className="input-add2 mx-3" placeholder="شماره بیمه" />
                <input onChange={(e) => setMypateintnationalid(e.target.value)} type="number" id="input-add" className="input-add2" placeholder="کدملی" />
           
                </div>
                <div className='mt-3'>   
           <button onClick={handlerNewPateint} className='btn btn-success btn-sm' > افزودن بیمار جدید  </button>
        
    </div>
                        </div>
                    </div>
                  
                </div>
            </div>
   

            <PatentList/>
        </div>
            {/* <AppointMentList/> */}
        </div>

   

    </>
  )
}
