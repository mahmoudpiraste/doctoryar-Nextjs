
import PersianDatePicker from '../../../components/layout/datepicker';
import {useContext, useEffect, useState } from 'react';
import { PatientContext } from '@/context/patientContext';
import axios from 'axios';


export default function AppointmentList() {
  
  const { selectedDate } = useContext(PatientContext);
  const [appointmentList, setAppointmentList] = useState([]);


  const handlerPateintListByDate = async (e) => {
    e.preventDefault();
  
    if (!selectedDate) return;
    //change date format from iso to yyyy-mm-dd
    const formattedDate = selectedDate.split('T')[0];
    // console.log(formattedDate)

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/patents/appointmentlist`, {
        date: formattedDate ,
      });
      
      console.log(res.data.data)
      setAppointmentList(res.data.data);
      // console.log(setAppointmentList);
      
    } catch (err) {
      console.error("Error from internal API:", err);
    }
  };
  


 

  return (
    <>
  <div className="container-main position-relative bg-white d-flex p-0 ">
     
     <div className=" content">
     <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded d-block align-items-center justify-content-between p-4" style={{ textAlign: "center" }}>
                       

                        <div className='mt-1' >
                        <h1 className='fs-6 fw-bold'>مشاهده نوبت های رزرو شده </h1>
                        <br></br>
                        <PersianDatePicker/>
                </div>
                <div className='mt-4'>       
                   <button onClick={handlerPateintListByDate} className='btn btn-success'>مشاهده</button>

                    </div>



              
                        </div>
                    </div>
                  
                </div>

                <div>
        {Array.isArray(appointmentList) && appointmentList.length > 0 ? (
  <table className="table table-bordered  mt-4" >
  <thead className="table-light ">
    <tr>
      <th>#</th>
      <th>نام بیمار</th>
      <th>تاریخ نوبت</th>
      <th>روش پرداخت</th>
      <th>وضعیت</th>
    </tr>
  </thead>
  <tbody>
    {appointmentList.map((item, index) => (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{new Date(item.appointment_date).toLocaleString('fa-IR')}</td>
        <td>{item.payment_method === 'Cash' ? 'نقدی' : 'آنلاین'}</td>
        <td>{item.status === 'Scheduled' ? 'رزرو شده' : item.status}</td>
      </tr>
    ))}
  </tbody>
</table>

) : (
  <p>موردی یافت نشد</p>
)}
</div>
            </div>
   
        </div>
        </div>




       
       

   

    </>
  )
}
