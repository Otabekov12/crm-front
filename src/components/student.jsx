import React, { useEffect, useState } from "react"
import "./student.scss"
import {Link} from 'react-router-dom'

const GetStudents = () => {

    const [student, setStudent] = useState([])

    const fetchData = async () => {
        fetch("http://localhost:5000/students")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudent(data)
        })

    }


    useEffect(() => {
        fetchData()
    }, [])

    return<>
        <div>
            {student.length > 0 && 
                student.map(student => {
                    return (
                    <div className="students">
                        <ul key={student.id}>
                        <li>{student.name}</li>
                        <li>{student.surname}</li>
                        <li>{student.user_phone}</li>
                        <li>{student.course}</li>
                    </ul>
                    </div>
                    )})
            }

        </div>
    </>
}

export default GetStudents;