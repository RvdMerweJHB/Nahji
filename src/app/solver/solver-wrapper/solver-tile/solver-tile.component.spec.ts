import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolverTileComponent } from './solver-tile.component';

describe('SolverTileComponent', () => {
  let component: SolverTileComponent;
  let fixture: ComponentFixture<SolverTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolverTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolverTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
