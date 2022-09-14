import React from "react";
import Button from '@mui/material/Button';
import "./addcourse.scss"

const AddCourse = () => {


    function handleClick(evt) {
        let {course_name, course_discription, course_price} = evt.target.elements;

        course_name = course_name.value.trim()
        course_discription = course_discription.value.trim()
        course_price = course_price.value.trim()


        fetch('http://localhost:5000/courses', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         mode: 'cors',
         body: JSON.stringify({
            course_name,
            course_discription,
            course_price
         })
      })
    }

    return (
        <>
            <h4>
                Add Course
            </h4>

            <div>
                <form action="" onSubmit={handleClick}>
                    <input type="text" placeholder="Course Name" name="course_name" />
                    <input type="text" placeholder="description" name="description" />
                    <input type="number" className="vf" placeholder="price" name="price" />
                   <Button variant="contained" type="submit">Add user</Button>
                </form>
            </div>
        </>
    )
}

export default AddCourse;