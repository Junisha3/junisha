import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  sename(name: string) {
    throw new Error('Method not implemented.');
  }
  updateTask(task_ID: number, task: Task) {
    throw new Error('Method not implemented.');
  }
  
  private baseUrl = "http://localhost:8080/tasks";
  
  constructor(private httpClient:HttpClient) { }

  getTaskList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  createTask(task:Object):Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/restaddtask`,task);
  }

  deleteTask(task_ID:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${task_ID}`,{responseType:'text'});
  }

 getTask(task_ID:number):Observable<any>{
   return this.httpClient.get(`http://localhost:8080/restgettask/${task_ID}`);
 }

updateTasks(task_ID:number,value:any):Observable<Object>{
   return this.httpClient.put(`${this.baseUrl}/${task_ID}`, value);
 }
 
 

//   setaskid(task_ID:number):Observable<any>{
//     return this.httpClient.get(`${this.baseUrl}/tak/${task_ID}`);
//   }

  seepriority(priority:string):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/getalltasks/${priority}`);
  }

 seename(taskname:string):Observable<any>{
   return this.httpClient.get(`${this.baseUrl}/nam/${taskname}`)
  }

 assign(task_ID:number,owner_ID:number):Observable<Object>{
  return this.httpClient.get(`http://localhost:8080/updateownerid/${task_ID}/${owner_ID}`);
}

book(task_ID:number, isBookmark:String):Observable<Object>{
  return this.httpClient.get(`http://localhost:8080/assignisBookmark/${task_ID}/${ isBookmark}`);
}

note(taskId:number, notes:String):Observable<Object>{
  return this.httpClient.get(`http://localhost:8080/setNote/${taskId}/${notes}`);
}
  
 pri(task_ID:number,priority:number):Observable<Object>{
   return this.httpClient.get(`http://localhost:8080/assignpriority/${task_ID}/${priority}`);
 }

searchByStatus(status:string): Observable<any> {

  return this.httpClient.get(`http://localhost:8080/status/${status}`);

}

validate(Name: string,Password:string): Observable<any> {

  return this.httpClient.get(`http://localhost:8080/user/${Name}/${Password}`);

}



}
