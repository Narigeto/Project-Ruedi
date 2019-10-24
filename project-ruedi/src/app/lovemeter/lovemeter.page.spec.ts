import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LovemeterPage } from './lovemeter.page';

describe('LovemeterPage', () => {
  let component: LovemeterPage;
  let fixture: ComponentFixture<LovemeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LovemeterPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LovemeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
