import { Component, Input, OnInit } from '@angular/core';
import { TileLocation } from '../../models/tile-location';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-solver-tile',
  templateUrl: './solver-tile.component.html',
  styleUrl: './solver-tile.component.scss'
})
export class SolverTileComponent implements OnInit {
    @Input()
    public Tile: Tile | undefined;
    
    ngOnInit(): void {
    }  
}
