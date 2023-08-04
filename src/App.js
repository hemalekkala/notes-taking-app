import './App.scss';
import { Home, AddNote, EditNote, Notes, SingleNote } from "./pages/index";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
     <Router>
     <Routes>
      <Route path = "/" element = {<Home/>} >
        <Route path = "/home" element = { <Notes/>} />
        <Route path = "/add" element = { <AddNote/>}/>
        <Route path ='/edit/:id' element = { <EditNote/>}/>
        <Route path='/note/:id' element= {<SingleNote/>} /> 
        </Route>
     </Routes>
     </Router>
     
    </div>
  );
}

export default App;
