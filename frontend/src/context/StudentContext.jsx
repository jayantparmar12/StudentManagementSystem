import { createContext, useState } from "react";
import { getStudents, deleteStudent as deleteStudentApi, addStudent } from "../service/StudentService";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const createStudent = async (student) => {
        try {
            const data = await addStudent(student);

            setStudents((prevStudents) => [
                ...prevStudents,
                data
            ]);
        } catch (error) {
            console.error("Error adding student:", error)
        }
    };

    const deleteStudent = async (id) => {
        try{
            await deleteStudentApi(id);

            setStudents((prevStudents)=>prevStudents.filter((prev)=> prev.id !== id))
        }catch(error){
            console.error("Errro ", error)
        }
    }
    return(
    <StudentContext.Provider value={{ students, fetchStudents, createStudent,deleteStudent }}>
        {children}
    </StudentContext.Provider>
    )
}