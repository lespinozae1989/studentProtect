import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanicoPage } from './panico.page';

describe('PanicoPage', () => {
  let component: PanicoPage;
  let fixture: ComponentFixture<PanicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
