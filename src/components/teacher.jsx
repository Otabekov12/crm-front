import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./teacher.scss"


const Teacher = () => {

    const [users, setUsers] = useState("")

    const fetchData = async () => {
        fetch("http://localhost:5000/teachers")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })

    }

    useEffect(() => {
        fetchData()
    }, "")

    return<>
        <div className="teacher__section">

            <h1>
                Teacher
            </h1>
            {users.length > 0 && 
                users.map(users => {
                    return (
                    <ul key={users.id}>
                        <li>{users.name}</li>
                        <li>{users.surname}</li>
                        <li>{'+9989 ' + users.user_phone}</li>
                        <li>{users.course}</li>
                        <li>
                            <Link className="link" to={"/teacher/groups"}>Groups</Link>
                        </li>

                    </ul>
                    )})
            }
        </div>
    </>
}

export default Teacher;