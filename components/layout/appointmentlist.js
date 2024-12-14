// components/LastReserve.js
import axios from 'axios';
import useSWR from "swr";
import PersianDatePicker from './datepicker';


const fetcher = url => axios.get(url).then(res => res.data)

function PatentList() {
  

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_APP_API_URL}/patents/appointmentlist`, fetcher)

  // console.log(data, error);
  if (error) return <div>مشکلی رخ داده است لطفا صفحه را رفرش کنید</div>
  if (!data) return  <div>کمی صبر کنید . . .</div>

  // console.log(data.data)
  const patentdata = data.data;
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
        <PersianDatePicker/>
          <h6 className="mb-0">آخرین مراجعین ثبت نام شده</h6>
          <a href="">مشاهده همه</a>
        </div>
        <div className="table-responsive">
          <table className="table text-end align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-dark">
                {/* <th scope="col"><input className="form-check-input" type="checkbox" /></th> */}
               
                <th scope="col"></th>
                <th scope="col">تاریخ ثبت</th>
                <th scope="col">شماره بیمه</th>
                <th scope="col">نام و نام خانوادگی</th>
                <th scope="col">تماس</th>
                <th scope="col">نوع بیمه</th>
                <th scope="col">اقدام</th>
              </tr>
            </thead>
            <tbody>
              {patentdata.slice().reverse().map((item, index) => (
                <tr key={index}>
                  {/* <td><input className="form-check-input" type="checkbox" /></td> */}
                
                  <td>{item.id}</td>
                  <td>{item.created_at}</td>
                  <td>{item.insurance_number}</td>
                  <td>{item.first_name}  {item.last_name}</td>
                  <td>{item.phone}</td>
                  <td>{item.insurance_type}</td>
                  <td><a className="btn btn-sm btn-primary" href="">جزئیات</a></td>
                </tr>
              ))}
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatentList;
