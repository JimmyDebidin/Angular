import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAbcComponent } from './block-abc.component';

describe('BlockAbcComponent', () => {
  let component: BlockAbcComponent;
  let fixture: ComponentFixture<BlockAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
