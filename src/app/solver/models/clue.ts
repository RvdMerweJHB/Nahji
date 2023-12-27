import { ClueStatus } from "./clue-status";
import { ClueType } from "./clue-type";

export class Clue {
    public Type: ClueType = ClueType.None;
    public Value: number = NaN;
    public Status: ClueStatus = ClueStatus.None;

    /**
     * A clue that indicates how many consecutive blocks are in row/column.
     */
    constructor(clueType: ClueType, value: number) {
        this.Type = clueType;
        this.Value = value;
    }
}