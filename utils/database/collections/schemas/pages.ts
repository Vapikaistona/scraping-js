export class PagesSchema{
    name: string;
    url: string;
    sku: string;
    icons: string[];
    title: string;
    videos: string[];
    description: string;
    region: string;

    constructor(objParam: any){
        const {
            name,
            url,
            sku,
            icons,
            title,
            videos,
            description,
            region
        } = objParam;
        this.name = name;
        this.url = url;
        this.sku = sku;
        this.icons = icons;
        this.title = title;
        this.videos = videos;
        this.description = description;
        this.region = region;
    }
}