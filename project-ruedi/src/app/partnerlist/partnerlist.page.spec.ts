import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnerlistPage } from './partnerlist.page';

describe('PartnerlistPage', () => {
  let component: PartnerlistPage;
  let fixture: ComponentFixture<PartnerlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerlistPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
