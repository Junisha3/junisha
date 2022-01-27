import { Component, OnInit } from '@angular/core';
import {Task} from '../Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../TaskService';

@Component({
  selector: 'app-search-priority',
  templateUrl: './search-priority.component.html',
  styleUrls: ['./search-priority.component.css']
})
export class SearchPriorityComponent implements OnInit {
  tasks:any;
  priority!:string;

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit() {
  }

  seepriority():void{
    this.troService.seepriority(this.priority).
    subscribe((data: any)=>{this.tasks=data;
   console.log(this.tasks)
   },
      (   err: any)=>{
   console.log(err)
   });
   }

}
