import './App.css';
import {Route, Routes} from "react-router-dom";
//-------------Components-----------------------------------
import LandingPage from "./Components/LandingPage/LandingPage"
import Home from "./Components/Home/Home"
import Detail from "./Components/Detail/Detail"
import Activity from "./Components/Activity/Activity"
import CreateActivity from "./Components/Activity/CRUD/Create/CreateActivity"
import UpdateActivity from "./Components/Activity/CRUD/Update/UpdateActivity"
import About from "./Components/About/About"
import Back from "./Components/Back/Back"
import axios from 'axios';
axios.defaults.baseURL ="https://countries-pi-production-7471.up.railway.app";

function App() {
  return (
     <div className="App">
      <Routes>
      <Route exact path= "/" element={<LandingPage/>}/>
      <Route path= "/home" element={<Home/>}/>
      <Route path= "/detail/:id" element={<Detail/>}/>
      <Route exact path= "/activity/" element={<Activity/>} />
      <Route exact path= "/activity/create/" element={<CreateActivity/>}/>
      <Route path= "/activity/update/:id" element={<UpdateActivity/>}/>
      <Route exact path= "/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;