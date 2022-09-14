import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const Groups = () => {

    const [groups, setGroups] = useState("")

    const fetchData = async () => {
        fetch("http://localhost:5000/groups/homework")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setGroups(data)
        })

    }

    return<>
        <div>

            <h1>
                Groups
            </h1>
            <button onClick={fetchData}>Fetch Users</button>
            {groups.length > 0 && 
                groups.map(groups => {
                    return (
                    <ul>
                        <li key={groups.id}>{groups.group_name}</li>
                    </ul>
                    )})
            }

        </div>
    </>
}

export default Groups;