import axios from 'axios';
const baseurl = "http://localhost:8080/tasks";
class TaskService {

login(name,password){
    return axios.get('http://localhost:8080/user'+'/'+name+'/'+password)
}


    createTask(Task){
        return axios.post('http://localhost:8080/restaddtask',Task);
    }
  
    assignTask(taskID,ownerID)
    {
        return axios.get('http://localhost:8080/updateownerid'+'/'+taskID+'/'+ownerID)
    }
    getTaskByID(taskID)
    {
        return axios.get('http://localhost:8080/restgettask'+'/'+taskID)
    }
    SearchByStatus(status)
    {
        return axios.get('http://localhost:8080/status'+'/'+status)
    }

    setNotes(taskID,notes)
     {
         return axios.get('http://localhost:8080/setNote'+'/'+taskID+'/'+notes)
     }
}

export default new TaskService()