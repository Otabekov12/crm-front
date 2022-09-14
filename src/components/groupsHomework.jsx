import React, { useEffect, useState } from "react"
import "./groupshomework.scss"


const groupHomework = () => {
    const [ homework, setHomework ] = useState([])

    const fetchData = async () => {
        fetch("http://localhost:5000/groups/homework")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setHomework(data)
        })
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return<>
        <div>
            {homework.length > 0 && homework.map(homework => {
                return (
                    <div className="homeworks">
                        <div className="homeworks__body">
                            <span>
                                {homework.group_name}
                            </span>

                            <span>
                                {homework.name + ' ' + homework.surname}
                            </span>
                            
                            <span>
                                {homework_discription}
                            </span>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    </>
}

export default groupHomework;