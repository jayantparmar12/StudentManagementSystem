import React from 'react'
import { useContext, useState } from 'react'
import { StudentContext } from '../../../context/StudentContext'
import './AddStudent.css'

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: "",
        marks: ""
    })

    const { createStudent } = useContext(StudentContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudent(student)
        setStudent({
            name: "",
            marks: ""
        })
    }

    return (
        <div className='add-student-container'>
            <h1 className='add-student-title'>
                <span className='student-icon'></span>
                Add New Student</h1>
            <form onSubmit={handleSubmit} className='student-form'>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setStudent({ ...student, name: e.target.value })} value={student.name} />
                </div>

                <div className='form-group'>
                    <label htmlFor="marks">Marks</label>
                    <input type="text" name="marks" id="marks" onChange={(e) => setStudent({ ...student, marks: e.target.value })} value={student.marks} />
                </div>
                <button type='submit' className='add-student-button'>
                    Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent