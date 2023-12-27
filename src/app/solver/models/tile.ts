import { TileLocation } from "./tile-location";
import { TileStatus } from "./tile-status";
import { TileStyle } from "./tile-style";

export class Tile {
    public Status: TileStatus = TileStatus.UnSolved;
    public Style: TileStyle = TileStyle.none;
    public Location: TileLocation = new TileLocation();
}