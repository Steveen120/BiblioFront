import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAdmComponent } from './libros-adm.component';

describe('LibrosAdmComponent', () => {
  let component: LibrosAdmComponent;
  let fixture: ComponentFixture<LibrosAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrosAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
