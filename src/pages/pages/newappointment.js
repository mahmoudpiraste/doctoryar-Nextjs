
import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {  useRouter  } from 'next/router';
import PatentListSelector from '../../../components/layout/pateintlistselector';
import PersianDatePicker from '../../../components/layout/datepicker';
import { PatientContext } from '@/context/patientContext';

export default function newAppointment() {
  const router = useRouter();

    const [mypateintId, setMypateintId] = useState('');
    const [mypateintName, setMypateintName] = useState('');
    const [mypateintPay, setMypateintPay] = useState('');
   const {selectedPatient ,selectedDate } = useContext(PatientContext);

console.log(mypateintId)
console.log(mypateintName)
console.log(selectedDate)
console.log(mypateintPay)
// console.log(mypateintnameemail)
// console.log(mypateintinsurance)
// console.log(mypateintinsnum)
// console.log(mypateintnationalid)


useEffect(() => {
  if (selectedPatient) {
    // بررسی مقدار selectedPatient قبل از دسترسی به .value
    setMypateintId(selectedPatient.value);
    setMypateintName(selectedPatient.label);
  }
}, [selectedPatient]); // اجرا تنها زمانی که selectedPatient تغییر کند

    const handlerNewPateint = (e) =>{
        e.preventDefault()
        console.log("Sending data:", {
          mypateintId, 
          selectedDate, 
          mypateintPay, 
          mypateintName
        });
        axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/patents/newappointment`, {
          mypateintId, selectedDate, mypateintPay, mypateintName
        })  
        .then(function(res) {
          console.log(res);
          router.push('/');
          toast.success("رزرو وقت انجام شد")
      
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
                        <div className="bg-light rounded d-block align-items-center justify-content-between p-4" style={{ textAlign: "center" }}>
                       

                        <div className='mt-1' >
                        <h1 className='fs-6 fw-bold'>سیستم نوبت دهی </h1>
                          <PatentListSelector/>
                          {selectedPatient ? (
        <p >مراجعه‌کننده انتخاب‌شده: {selectedPatient.label}</p>
      ) : (
        <p >هیچ مراجعه‌کننده‌ای انتخاب نشده است.</p>
      )}
                </div>
                        <div className='mt-1'>
                          <h2 className='fs-6 fw-bold'>مشخصات رزرو</h2>
                          <span>روش پرداخت را انتخاب کنید</span>
                          <br/>
                          
                          <input type="radio" id="inputOne" name="fav_language" onChange={(e) => setMypateintPay(e.target.value)} value="Cash"/>
                           <label for="inputOne">نقدی</label><br/>
                          <input type="radio" id="inputTow" name="fav_language" onChange={(e) => setMypateintPay(e.target.value)} value="Online"/>
                           <label for="inputTow">آنلاین</label><br/>

                          
                          <PersianDatePicker/>
                        
                </div>
                <div className='mt-3'>   
           <button onClick={handlerNewPateint} className='btn btn-success btn-sm' > ثبت نوبت </button>
        
    </div>
                        </div>
                    </div>
                  
                </div>
            </div>
   
        </div>
        </div>

      


    </>
  )
}
