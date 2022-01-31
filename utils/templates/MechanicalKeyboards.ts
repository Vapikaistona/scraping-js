import puppeteer, { Puppeteer } from 'puppeteer';

export module mechanical_keyboards {
    export async function getKeyboards(productLimit: number = 5) {
        const url = 'https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=1&show='+productLimit;
        const KEYBOARD_SECTION = `.wrap-imagebox .row`;
        const KEYBOARD_ITEM = `.product-box .imagebox `;
        const PRODUCT_IMAGES = `.box-image li > a > img[src]`;
        const PRODUCT_NAME = `.box-content .product-name > a`;
        const PRODUCT_PRICE = `.box-content .price > span`;
    
    
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const elements = await page.waitForSelector(KEYBOARD_SECTION);
        const  allProducts = [];
        for (let i = 1; i <= productLimit; i++) {
            const productDetails = await elements.$(`:nth-child(${i}) ${KEYBOARD_ITEM}`);
            const productImages = await productDetails.$$eval(PRODUCT_IMAGES,(images) => images.map((img: any) => img.src));
            const productName = await productDetails.$(PRODUCT_NAME);
            const productNamevalue = await productName.evaluate((el: any) => el.textContent);
            const productUrl = await productName.evaluate((el: any) => el.href);
            const productPrice = await productDetails.$(PRODUCT_PRICE);
            const productPricevalue = await productPrice.evaluate(el => el.textContent);
            allProducts.push({ 'name': productNamevalue, price: productPricevalue, url: productUrl, images: productImages });
        }
        const completeDetailList = [];
        for (let product of allProducts) {
            const newDetails = await getAllProductDetails(product.url, page);
            completeDetailList.push({ ...product, ...newDetails});
        }
        await browser.close();
        return completeDetailList;
    };
};
async function getAllProductDetails (productUrl: string, page: puppeteer.Page) {
    await page.goto(productUrl);
    const completeDetails = await page.evaluate(()=> {
        const sku = document.querySelector('.product-id > .id').textContent;
        const videos = [...document.querySelectorAll('.video-container > iframe')].map((element: any) => element.src);
        const categories = [...document.querySelectorAll('ul.breadcrumbs > li > a')].map((element: any) => element.textContent).slice(-2);
        const features = [...document.querySelectorAll('ul.acc_features > li')].map((element: any) => element.textContent);
        const specs = [...document.querySelectorAll('table.v3_specs tr')].map((element: any) => {
            const id = element.querySelector('.field').textContent.split(' ').join('_').toLowerCase();
            const value = element.querySelector('.value').textContent;
            return { [id]: value };
        });
        const switches = [...document.querySelectorAll('table.edition_switch_list > tbody > tr')].map((element: any) => {
            const swtch = element.querySelector('.switch');
            const sku = swtch.querySelector('div').textContent;
            const nameElement = swtch.querySelector('a');
            let name = '';
            if (nameElement) {
                name = nameElement.textContent;
            } else {
                name = swtch.innerText.split('\n')[0];
            }
            const price = element.querySelector('.price').textContent;
            return { name, sku, price };
        });
        return { sku, videos, categories, features, specs, switches };
    });
    return completeDetails;
}