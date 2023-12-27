import { TileLocation } from "./tile-location";
import { TileStatus } from "./tile-status";
import { TileStyle } from "./tile-style";

export class Tile {
    public Status: TileStatus = TileStatus.UnSolved;
    public Style: TileStyle = TileStyle.none;
    public Location: TileLocation = new TileLocation();

    /**
     * Defines the location of the tile on the board using X and Y co-ordinates.
     */
    constructor(x: number, y: number) {
        this.Location = {
            X: x,
            Y: y
        }
    }
}