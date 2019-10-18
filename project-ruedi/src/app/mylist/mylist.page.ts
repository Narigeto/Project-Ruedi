import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { LoveEntryService } from '../../services/love-entry.service';

@Component({
  selector: 'app-mylist',
  templateUrl: 'mylist.page.html',
  styleUrls: ['mylist.page.scss']
})
export class MylistPage implements OnInit {
  todos: Todo[];

  constructor(private todoService: LoveEntryService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }

}
