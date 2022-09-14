import React, { useEffect, useState } from "react"
import Homwork from "../../components/groupsHomework"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./student.scss"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const Student = () => {
    const [ groups, setGroups ] = useState("")

    const fetchData = async () => {
        fetch("http://localhost:8080/student/groups")
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return<>
        <div className="student__section">
            <h1>
                Student
            </h1>
            <div className="groups">
                {groups.length > 0 && groups.map(groups => {
                    return(
                        <div className="student__body">
                            <span>{groups.name + ' ' + groups.surname}</span>
                            <div>
                                <span>{groups.group_name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="homework">
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Uy avzifa
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Homwork />
                </Typography>
            </Box>
            </Modal>
            </div>

        </div>
    
    </>
}

export default Student;