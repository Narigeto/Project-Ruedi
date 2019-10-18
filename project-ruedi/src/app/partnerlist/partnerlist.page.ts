import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { LoveEntryService } from '../../services/love-entry.service';

@Component({
  selector: 'app-partnerlist',
  templateUrl: 'partnerlist.page.html',
  styleUrls: ['partnerlist.page.scss']
})
export class PartnerlistPage implements OnInit {
  private todos: Todo[] = [];

  constructor(private loveEntryService: LoveEntryService) {

  }

  public ngOnInit(): void {
    this.loveEntryService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

}


