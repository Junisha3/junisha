import React,{Component} from 'react';
import axios from 'axios';
import Home from './Components/HomeComponent';

class GetTaskData extends Component{
    constructor(props){
        super(props)
        this.state={
            tasks:[]
        }
      
    }
    componentDidMount(){
        axios.get('http://localhost:8080/tasks')
        .then(response => this.setState({tasks:response.data}))
    }
    
    render(){
        return(
            <div>
                <Home></Home>
            <h2 className="text-center"> Task List</h2>
            <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                 <th>taskid</th>
                                 <th>taskname</th>
                                 <th>ownerid</th>   
                                 <th>creatorid</th>    
                                 <th>Status</th>   
                                 <th>Description</th>  
                                 <th>priority</th>
                                 <th>notes</th>
                                 <th>isBookmark</th>
                                 <th>creatoron</th>
                                 <th>modifiedOn</th>
                                </tr>
                            </thead>
                            <tbody>
                {this.state.tasks.map(task =>(<tr key={task.taskid}>
                    <td>{task.taskId}</td> 
                    <td>{task.taskname}</td>
                    <td>{task.ownerId}</td>
                    <td>{task.creatorId}</td>
                    <td>{task.status}</td>
                    <td>{task.description}</td>
                    <td>{task.priority}</td>
                    <td>{task.notes}</td>
                    <td>{task.isBookmark.toString()}</td>
                    <td>{task.creatorOn}</td>
                    <td>{task.modifiedOn}</td>
                    </tr>))}
                    </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default GetTaskData;