import { Todo } from '../../models/todo';
import { LoveEntryService } from '../../services/love-entry.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-love-entry-detail',
  templateUrl: './love-entry-detail.page.html',
  styleUrls: ['./love-entry-detail.page.scss'],
})
export class LoveEntryDetailPage implements OnInit {
  todo: Todo = {
    task: 'test',
    createdAt: new Date().getTime(),
    priority: 2
  };

  todoId = null;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private todoService: LoveEntryService,
    private loadingController: LoadingController,
    private location: Location) {
    }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.location.back();
        // goBack('home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.location.back();
      });
    }
  }

}
