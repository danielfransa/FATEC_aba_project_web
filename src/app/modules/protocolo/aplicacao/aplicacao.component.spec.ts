import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoComponent } from './aplicacao.component';

describe('AplicacaoComponent', () => {
  let component: AplicacaoComponent;
  let fixture: ComponentFixture<AplicacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicacaoComponent]
    });
    fixture = TestBed.createComponent(AplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
