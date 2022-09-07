import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Student from "./Components/Student";
import StudentList from "./Components/StudentList";


function App() {
  return (
    <div className="App">

      <NavBar />
           <Student />
           <StudentList />
           <Footer />

    </div>
  );
}

export default App;
