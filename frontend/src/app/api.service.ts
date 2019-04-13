import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8888";

  readTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  createTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(`${this.PHP_API_SERVER}/api/create.php`, task);
  }
  updateTask(task: Task){
    return this.httpClient.put<Task>(`${this.PHP_API_SERVER}/api/update.php`, task);   
  }
  deleteTask(id: number){
    return this.httpClient.delete<Task>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
  constructor(private httpClient: HttpClient) { }
}
