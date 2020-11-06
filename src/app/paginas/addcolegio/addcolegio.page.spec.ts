import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcolegioPage } from './addcolegio.page';

describe('AddcolegioPage', () => {
  let component: AddcolegioPage;
  let fixture: ComponentFixture<AddcolegioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcolegioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcolegioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
