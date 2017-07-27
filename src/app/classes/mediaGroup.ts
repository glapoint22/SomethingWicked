export class MediaGroup {
    id: string;
    title: string;
    thumbnail: string;

    constructor(id: string, title: string, thumbnail: string) { 
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
    }
}