import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloComponent } from './protocolo.component';

describe('ProtocoloComponent', () => {
  let component: ProtocoloComponent;
  let fixture: ComponentFixture<ProtocoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtocoloComponent]
    });
    fixture = TestBed.createComponent(ProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
