import { Component, OnInit } from '@angular/core';
import { TileLocation } from '../../models/tile-location';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-solver-tile',
  templateUrl: './solver-tile.component.html',
  styleUrl: './solver-tile.component.scss'
})
export class SolverTileComponent implements OnInit {
    public Tile: Tile = new Tile();
    
    ngOnInit(): void {
    }  
}
