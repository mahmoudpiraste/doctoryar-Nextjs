import  {  useContext } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { PatientContext } from "@/context/patientContext";

export default function PersianDatePicker() {
  const {selectedDate, setSelectedDate} = useContext(PatientContext); // گرفتن مقدار از Context

  const handleChange = (date) => {
    const isoDate = date?.toDate()?.toISOString(); // تبدیل تاریخ به ISO 8601
    setSelectedDate(isoDate); // ذخیره تاریخ در state
    console.log("Selected Date (ISO 8601):", isoDate);
  };

  return (
    <div className="date-picker-container" style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h4 style={{ textAlign: "center", marginBottom: "5px", fontSize:"14px" }}>تاریخ را انتخاب کنید</h4>
      <DatePicker
        value={selectedDate}
        onChange={handleChange}
        calendar={persian}
        locale={persian_fa}
        showTime 
        timePicker 
        inputClass="form-control"
        placeholder="تاریخ را انتخاب کنید"
        style={{
          fontFamily: "Vazir, Arial, sans-serif", // فونت فارسی
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
