import { Component, OnInit } from '@angular/core';
import { Todo, LoveEntryService } from '../services/love-entry.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

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
