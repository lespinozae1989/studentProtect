import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicolegioPage } from './micolegio.page';

describe('MicolegioPage', () => {
  let component: MicolegioPage;
  let fixture: ComponentFixture<MicolegioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicolegioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MicolegioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
