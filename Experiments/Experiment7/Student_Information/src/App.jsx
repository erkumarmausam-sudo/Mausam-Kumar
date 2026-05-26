import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="App_Class">
    <h1>Student Information</h1>
    
    <div className="container">
    <StudentCard name="Monika" course="B.Tech Data Science" marks="95"/></div>
    <div className="container">
    <StudentCard name="Rahul" course="B.Tech CS" marks="88"/>
    </div>
    <div className="container">
    <StudentCard name="Sneha" course="B.Tech IT" marks="92"/>
    </div>
    </div>
  );
  
}
export default App;