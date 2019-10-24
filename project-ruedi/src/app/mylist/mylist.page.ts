import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { LoveEntryService } from '../../services/love-entry.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mylist',
  templateUrl: 'mylist.page.html',
  styleUrls: ['mylist.page.scss']
})
export class MylistPage implements OnInit {
  private todos: Todo[] = [];
  private test = true;

  constructor(private todoService: LoveEntryService,
              private navCtrl: NavController) { }

  public ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
      // TODO: just tmporary solution for testing first visit of app
      //  in future: check if user has token generated already or not.
      if (this.test) {
        this.navCtrl.navigateForward('/welcome-page');
      }
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
