import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-setpriority-task',
  templateUrl: './set-priority.component.html',
  styleUrls: ['./set-priority.component.css']
})
export class SetPriorityComponent implements OnInit {
  tasks:any;
  taskid!:number;
  priority!:number;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }
  pri():void{
    this.taskService.pri(this.taskid, this.priority).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();}
   onSubmit(){
    this.pri();
  }
  gotoList() {
    this.router.navigate(['/tasks']) 
  }
}
