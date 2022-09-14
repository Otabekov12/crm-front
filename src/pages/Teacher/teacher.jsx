import React, { useEffect, useState } from "react"
import AddHomework from "../../components/addHomework"
import "./teacher.scss"
import { useResolvedPath } from "react-router-dom"


const teacherGroups = () => {
    const [ groups, setGroups ] = useState("")

    const fetchData = async () => {
        fetch("http://localhost:8080/teacher/groups")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setGroups(data)
        })
    }

    useEffect(()=> {
        fetchData()
    }, "")

    return<>
        <div className="teacher__section">

            <h1>
                Teacher
            </h1>
            {groups.length > 0 && groups.map(groups => {
                return (
                    <div className="teachers">
                        <div className="teachers__info">
                            <span>{groups.name + ' ' +groups.surname}</span>
                        </div>
                        <ul className="teachers__groups">
                        <li>
                            {groups.group_name}
                        </li>
                    </ul>
                    </div>
                )
            })}



            <div>
                <div>
                    <AddHomework />
                </div>
            </div>
        </div>
    </>
}

export default teacherGroups;


