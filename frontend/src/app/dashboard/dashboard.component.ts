import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from '../task';
import { Validators } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  tasks:  Task[];
  selectedTask:  Task  = { id :  null , name:null, description:  null};
  private taskshow = false;
  private editshow = false;
  constructor(
    private apiService: ApiService,
    ) { }

  createTaskShow() {
    this.taskshow = true;
    this.editshow = false;
    
  }
  editTaskShow() {
    this.editshow = true;
    this.taskshow = false;
  }

  createTask(form) {
      // Create
      this.apiService.createTask(form.value).subscribe((tasks: Task)=> {
      this.fetchData();
      form.reset();
      alert("Task Created!");
      });
  }
  updateTask(form){
    // Update
    if(this.selectedTask && this.selectedTask.id){
      form.value.id = this.selectedTask.id;
      this.apiService.updateTask(form.value).subscribe((tasks: Task)=> {});
      this.fetchData();
      alert("Task Updated!");
    } else {

    }

  }

  selectTask(task: Task){
    this.selectedTask = task;
    this.editshow = true;
    this.taskshow = false;
  }

  deleteTask(id){
    this.apiService.deleteTask(id).subscribe((tasks: Task)=>{
      this.fetchData();
      alert("Task Completed!");
    });

  }

  ngOnInit() {
      this.fetchData();

      $(document).ready(function(){

    });
  }

  fetchData() {
    this.apiService.readTasks().subscribe((tasks: Task[])=> {
      this.tasks = tasks;
    });
  }  
}
