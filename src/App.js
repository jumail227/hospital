import About from "./About";
import AddProjects from "./AddProjects";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/addpro' element={<AddProjects/>}/>

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
