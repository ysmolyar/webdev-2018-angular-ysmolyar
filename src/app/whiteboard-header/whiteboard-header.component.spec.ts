import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardHeaderComponent } from './whiteboard-header.component';

describe('WhiteboardHeaderComponent', () => {
  let component: WhiteboardHeaderComponent;
  let fixture: ComponentFixture<WhiteboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
