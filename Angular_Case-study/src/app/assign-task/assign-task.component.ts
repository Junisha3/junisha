import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  tasks:any;
  taskid!:number;
  ownerid!:number;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }


  assign():void{
    this.taskService.assign(this.taskid, this.ownerid).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }
   onSubmit(){
    this.assign();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }

}
