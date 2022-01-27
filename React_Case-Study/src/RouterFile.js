import React from 'react';
import{Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';
import Login from './Components/login';
import GetTaskData from './GetTaskData';
import CreateTaskComponent from './Components/CreateTaskComponent';
import AssignTask from './Components/AssignTask';
import SearchById from './Components/SearchById';
import TrackStatus from './Components/TrackStatus';
import Home from './Components/HomeComponent';
import UpdateNotes from './Components/UpdateNotes';



const routing =(
    <Router>
       <Routes>
             <Route path="/" element={<Login/>}/>  
             <Route path="/home" element={<Home/>}/>
            <Route path="/tasks"  element={<GetTaskData/>}/> 
            <Route path="/create" element={<CreateTaskComponent/>}/>
            <Route path="/assign" element={<AssignTask/>}></Route>
            <Route path="/search" element={<SearchById/>}></Route>
            <Route path="/track" element={<TrackStatus/>}></Route>
            <Route path ="/login" element={<Login/>}></Route>
            <Route path="/notes" element={<UpdateNotes/>}></Route>
</Routes>
    </Router>
    
   
)
export default routing

