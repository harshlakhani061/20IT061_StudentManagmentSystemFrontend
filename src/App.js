import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Student from "./Components/Student";
import StudentList from "./Components/StudentList";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import MyAlert from "./Components/MyAlert";
import Login from "./Components/Login";
import Register from "./Components/Register";



function App() {
   const [alert, setAlert] = useState(null);

       let showAlert = (type, message) => {
           setAlert({
               type: type,
               message: message,
           });
           setTimeout(() => {
               setAlert(null);
           }, 3000);
       };

       return (
           <div className="App">
               <Router>
                   <NavBar/>
                   <MyAlert alert={alert}/>
                   <Container>
                       <Routes>
                           <Route path="student" element={<Student showAlert={showAlert}/>}/>
                           <Route
                               path="student/:studentId"
                               element={<Student showAlert={showAlert}/>}
                           />
                           <Route
                               path="listStudents"
                               element={<StudentList showAlert={showAlert}/>}
                           />
                           <Route
                                path="login"
                                element={<Login showAlert={showAlert}/>}
                                />
                           <Route
                                 path="register"
                                 lement={<Register showAlert={showAlert} />}
                                 />
                       </Routes>
                   </Container>
                   <Footer/>
               </Router>
           </div>
       );
}

export default App;
