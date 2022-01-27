import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidation } from './FormValidation';
import { FormExample } from './FormExample';
import { Registration } from './Registration';
import { Login } from './Login';
import { SearchStatusComponent } from './search-status/search-status.component';
import { TaskDetailsComponent } from './Task-details.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { CreatetaskComponent } from './createtask/createtask.component'; 
import{ TaskListComponent} from './task-list/task-list.component';
import {SearchPriorityComponent} from './search-priority/search-priority.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
import { SetNoteComponent } from './set-note/set-note.component';
import {SetPriorityComponent} from './set-priority/set-priority.component'
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full' },
  {path:'TemplateForm',component:FormExample},
  {path:'ModelForm',component:FormValidation},
  {path: 'Registration',component:Registration},
  {path:'Login',component:Login},
  {path:'save' , component:CreatetaskComponent},
  {path:'tasks', component:TaskListComponent},
  {path:'setid',component: SearchStatusComponent},
  {path:'assigntask', component:AssignTaskComponent},
  {path:'details/:taskId',component:TaskDetailsComponent},
  {path:'searchpriority',component:SearchPriorityComponent},
  {path:'bookmark',component:SetBookmarkComponent},
  {path:'prio',component:SetPriorityComponent},
  {path:'note',component:SetNoteComponent},
  {path:'home',component:HomePageComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }