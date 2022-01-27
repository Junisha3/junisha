import React from "react";
import{Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';
export default function Home()
{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-primary bg-light" >
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">

            <li class="nav-link-active">
                <Link to="/tasks" class="nav-link" >All Tasks</Link>
            </li>

            <li class="nav-item">
                <Link to="/create" class="nav-link" >Create Task</Link>
            </li>

            <li class="nav-item">
                <Link to="/assign" class="nav-link" >Update Task</Link>
            </li>

            <li class="nav-item">
                <Link to="/search" class="nav-link" >SearchByID</Link>
            </li>

            <li class="nav-item">
                <Link to="/track" class="nav-link" >TrackStatus</Link>
            </li>

            <li class="nav-item">
                <Link to="/notes" class="nav-link" >Update Notes</Link>
            </li>
            </ul>
            </div>
            </nav>
            <h1>Welcome to Home Page</h1>
        </div>
    
    )
}