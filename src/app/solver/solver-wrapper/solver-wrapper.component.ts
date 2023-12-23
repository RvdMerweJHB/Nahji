import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';

@Component({
  selector: 'app-solver-wrapper',
  templateUrl: './solver-wrapper.component.html',
  styleUrl: './solver-wrapper.component.scss'
})
export class SolverWrapperComponent implements OnInit {
    public Tiles: Tile[][] | undefined;
    public Rows: number = 3;
    public Columns: number = 3;

    ngOnInit(): void {
        this.Tiles = [[new Tile(), new Tile(), new Tile()], [new Tile(), new Tile(), new Tile()], [new Tile(), new Tile(), new Tile()]];
    }
}
