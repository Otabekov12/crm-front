import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Student from "./pages/Student/student";
import Teacher from "./components/teacher";
import Groups from "./components/groups";
import AddUser from "./components/addUser";
import AddHomework from "./components/addHomework";
import TeacherGroups from "../src/pages/Teacher/teacher"
import GroupsHomework from "./components/groupsHomework";
import Admin from "./pages/Admin/admin";


const App = () => {
  return(<>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/group" element={<Groups />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addhomework" element={<AddHomework />} />
        <Route path="/teacher/groups" element={<TeacherGroups />}/>
        <Route path="/homeworks" element={<GroupsHomework />} />
        <Route path="/admin" element={<Admin />} />

    </Routes>

    </>)
}

export default App;