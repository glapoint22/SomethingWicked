import { ShowcaseImage } from "./showcaseImage";
import { Show } from "./show";
import { Song } from "./song";
import { MediaGroup } from "./mediaGroup";
import { Member } from "./member";

export class Data {
    showcaseImages: ShowcaseImage[];
    shows: Show[];
    songs: Song[];
    videoGroups: MediaGroup[];
    photoGroups: MediaGroup[];
    members: Member[];
}