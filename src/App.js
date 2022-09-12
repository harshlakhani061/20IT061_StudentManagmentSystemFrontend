import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Student from "./Components/Student";
import StudentList from "./Components/StudentList";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
   return (<div className="App">
           <Router>
               <NavBar/>
               <Container>
                   <Routes>
                       <Route path="student" element={<Student/>}/>
                       <Route path="student/:studentId" element={<Student/>}/>
                       <Route path="listStudents" element={<StudentList/>}/>
                   </Routes>
               </Container>
               <Footer/>
           </Router>
       </div>);
}

export default App;
