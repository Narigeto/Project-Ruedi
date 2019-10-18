import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MylistPage } from './mylist.page';

describe('MylistPage', () => {
  let component: MylistPage;
  let fixture: ComponentFixture<MylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MylistPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
