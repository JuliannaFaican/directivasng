import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadosComponent } from './paginados.component';

describe('PaginadosComponent', () => {
  let component: PaginadosComponent;
  let fixture: ComponentFixture<PaginadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
