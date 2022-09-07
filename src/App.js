import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Student from "./Components/Student";
import StudentList from "./Components/StudentList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">

      <NavBar />
           <Container>
           <Student />
           <StudentList />
           </Container>
           <Footer />

    </div>
  );
}

export default App;
