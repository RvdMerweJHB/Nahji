import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolverWrapperComponent } from './solver-wrapper/solver-wrapper.component';
import { SolverTileComponent } from './solver-wrapper/solver-tile/solver-tile.component';

@NgModule({
  declarations: [
    SolverWrapperComponent,
    SolverTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SolverWrapperComponent,
    SolverTileComponent
  ]
})
export class SolverModule { }
