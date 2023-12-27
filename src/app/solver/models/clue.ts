import { ClueStatus } from "./clue-status";
import { ClueType } from "./clue-type";

export class Clue {
    public Type: ClueType = ClueType.None;
    public Value: number = NaN;
    public Status: ClueStatus = ClueStatus.None;
}