import React from 'react'
import AddStudent from './AddStudent/AddStudent'
import StudentList from './StudentList/StudentList'
import './Student.css'

const Student = () => {
  return (
    <div className='students'>
        <AddStudent />
        <StudentList />
    </div>
  )
}

export default Student