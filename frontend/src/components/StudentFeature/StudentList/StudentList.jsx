import React from 'react'
import { useContext, useEffect } from 'react'
import { StudentContext } from '../../../context/StudentContext.jsx'
import './StudentList.css'

const StudentList = () => {
    const { students, fetchStudents,deleteStudent } = useContext(StudentContext)
    useEffect(() => {
        fetchStudents()
    }, [])
    return (
        <div className='student-list-container'>
            <h1 className='heading'>Student List</h1>
            <div className='table-container'>
                <table className='student-table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>{student.name}</td>
                                <td>{student.marks}</td>
                                <td>
                                    <button className='delete-btn'
                                    onClick={(e)=>deleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentList