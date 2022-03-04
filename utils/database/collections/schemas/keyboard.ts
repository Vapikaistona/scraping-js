export class KeyboardSchema{
    name: string;
    url: string;
    sku: string;
    price: string;
    available: string;
    videos: string[];
    categories: string[];
    features: string[];
    specs: string[];
    switches: string[];

    constructor(objParam: any){
        const {
            name,
            url,
            sku,
            price,
            available,
            videos,
            categories,
            features,
            specs,
            switches
        } = objParam;
        this.name = name;
        this.url = url;
        this.sku = sku;
        this.price = price;
        this.available = available;
        this.videos = videos;
        this.categories = categories;
        this.features = features;
        this.specs = specs;
        this.switches = switches;
    }
}