import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodoList } from '@interfaces/todo-list.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoListApiService {
  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient,
  ) {}

  getTodoList(): Observable<ITodoList> {
    return this.http.post<ITodoList>(`${this.apiUrl}/todo-list/list`, {});
  }
}
