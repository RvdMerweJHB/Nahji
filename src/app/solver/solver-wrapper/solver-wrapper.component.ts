import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';
import { Clue } from '../models/clue';
import { ClueType } from '../models/clue-type';

@Component({
  selector: 'app-solver-wrapper',
  templateUrl: './solver-wrapper.component.html',
  styleUrl: './solver-wrapper.component.scss'
})
export class SolverWrapperComponent implements OnInit {
    public Tiles: Tile[][] | undefined;
    public ColumnClues: Clue[][] | undefined;
    public RowClues: Clue[][] | undefined;

    public Rows: number = 3;
    public Columns: number = 3;

    ngOnInit(): void {
        let firstRow = [new Tile(0, 0), new Tile(1, 0), new Tile(2, 0), new Tile(3, 0), new Tile(4, 0)];
        let secondRow = [new Tile(0, 1), new Tile(1, 1), new Tile(2, 1), new Tile(3, 1), new Tile(4, 1)];
        let thirdRow = [new Tile(0, 2), new Tile(1, 2), new Tile(2, 2), new Tile(3, 2), new Tile(4, 2)];
        let fourthRow = [new Tile(0, 3), new Tile(1, 3), new Tile(2, 3), new Tile(3, 3), new Tile(4, 3)];
        let fithRow = [new Tile(0, 4), new Tile(1, 4), new Tile(2, 4), new Tile(3, 4), new Tile(4, 4)];

        this.Tiles = [
          firstRow, 
          secondRow, 
          thirdRow,
          fourthRow,
          fithRow
        ];

        let firstColumnClues = [
          new Clue(ClueType.Column, 2),
          new Clue(ClueType.Column, 2)
        ];

        let secondColumnClues = [
          new Clue(ClueType.Column, 2),
          new Clue(ClueType.Column, 1)
        ];

        let thirdColumnClues = [
          new Clue(ClueType.Column, 1),
          new Clue(ClueType.Column, 1)
        ];

        let fourthColumnClues = [
          new Clue(ClueType.Column, 2),
          new Clue(ClueType.Column, 1)
        ];

        let fithColumnClues = [
          new Clue(ClueType.Column, 2),
          new Clue(ClueType.Column, 2)
        ];

        this.ColumnClues = [
          firstColumnClues,
          secondColumnClues,
          thirdColumnClues,
          fourthColumnClues,
          fithColumnClues
        ];

        let firstRowClues = [
          new Clue(ClueType.Row, 2),
          new Clue(ClueType.Row, 2)
        ];

        let secondRowClues = [
          new Clue(ClueType.Row, 2),
          new Clue(ClueType.Row, 2)
        ];

        let thirdRowClues = [
          new Clue(ClueType.Row, 1)
        ];

        let fourthRowClues = [
          new Clue(ClueType.Row, 1),
          new Clue(ClueType.Row, 1)
        ];

        let fithRowClues = [
          new Clue(ClueType.Row, 5)
        ];

        this.RowClues = [
          firstRowClues,
          secondRowClues,
          thirdRowClues,
          fourthRowClues,
          fithRowClues
        ];
    }

    solve(): void {
      console.log('solve!!')
    }
}
