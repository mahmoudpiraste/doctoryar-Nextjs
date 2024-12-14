import axios from "axios";
import useSWR from "swr";
import Select from "react-select";

import {useContext, useState, useEffect } from "react";
import { PatientContext } from "@/context/patientContext";


const fetcher = (url) => axios.get(url).then((res) => res.data);

function PatentListSelector() {
  const [options, setOptions] = useState([]);
const {setSelectedPatient } = useContext(PatientContext); // گرفتن مقدار از Context
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_APP_API_URL}/patents/patentlist`, fetcher);

  useEffect(() => {
    if (data && data.data) {
      const formattedOptions = data.data.reverse().map((patient) => ({
        value: patient.id, // ID for backend operations
        label: `${patient.first_name} ${patient.last_name} `, // Display text
      }));
      setOptions(formattedOptions);
    }
  }, [data]);

  const handleChange = (selectedOption) => {
    setSelectedPatient(selectedOption); // ذخیره در Context
    console.log("Selected Patient:", selectedOption);
  };

  if (error) return <div>مشکلی رخ داده است لطفا صفحه را رفرش کنید</div>;
  if (!data) return <div>کمی صبر کنید . . .</div>;

  return (
    <div className="container-fluid pt-4 px-4 " style={{ marginBottom: "-35px" }}>
      <div className="bg-light text-center rounded p-4">
     
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h3 className="fs-6">انتخاب مراجعه کننده </h3>
            <Select
              options={options}
              onChange={handleChange}
              placeholder="جستوجو بر اساس نام و نام خانوادگی یا موبایل"
              isClearable
            />
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default PatentListSelector;
