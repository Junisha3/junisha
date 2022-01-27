import React, { Component } from "react";
import TaskService from "../TaskService";
import Home from '../Components/HomeComponent';

class UpdateNotes extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskId:'',
        notes:'',
        task:''
        
        }
        this.changeHandler = this.changeHandler.bind(this);
       this.submitHandler=this.submitHandler.bind(this);
      
    }

    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler(e){
        e.preventDefault()
        console.log(this.state)
        TaskService.setnotes(this.state.taskId,this.state.notes)
        .then(response => {
            console.log(response)
            this.setState({task:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskId,notes} = this.state
        return(
            <div>
                <Home></Home>
                 <h2 style={{textAlign:"center"}}>Update Notes</h2>
                <form onSubmit={this.submitHandler} style={{textAlign:"center"}}>
                <div>
                        Task ID:
                        <input type="number"
                        name="taskId"
                        value={taskId}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Task Notes:
                        <input type="text"
                        name="notes"
                        value={notes}
                        onChange={this.changeHandler}
                        />
                    </div> 
                    
                <button type="submit">Submit</button>
                
                
                   
                </form>
            </div>
        )
    
    }

    
}

export default UpdateNotes