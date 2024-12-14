import { createContext , useState } from "react";

export const PatientContext = createContext();

export const PatientProvider = ({children}) =>{
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <PatientContext.Provider value={{ selectedPatient, setSelectedPatient, selectedDate, setSelectedDate}}>
            {children}
        </PatientContext.Provider>
    );
};