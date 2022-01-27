
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskService } from "./TaskService";
import {user} from './user'
@Component({
     selector:'template-form',
     templateUrl:'./Login.html'})
     export class Login{
          User : user = new user();
          Name !: string;
          Password !:string;
          constructor(private router:Router,private taskservice : TaskService){}


check(value:any)
{this.Name = value.Name;
     this.Password = value.Password;
     this.taskservice.validate(this.Name,this.Password).subscribe(data=>
          {
               console.log(data);
               if(data==true)
                {
                      this.gotopage();
                    }if(data==false)
                     {
                          alert("Please enter Valid Credentials");
                         
                         }
                    },error=>console.log(error));}
                    gotopage(){
                         this.router.navigate(["/tasks"]);}
                    }

