const puppeteer = require('puppeteer');

(async () => {
    const productLimit = 20;
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
    for (let i = 1; i <= productLimit; i++) {
        const productDetails = await elements.$(`:nth-child(${i}) ${KEYBOARD_ITEM}`);
        const productImages = await productDetails.$$eval(PRODUCT_IMAGES,(images) => images.map(img => img.src));
        const productName = await productDetails.$(PRODUCT_NAME);
        const productNamevalue = await productName.evaluate(el => el.textContent);
        const productUrl = await productName.evaluate(el => el.href);
        const productPrice = await productDetails.$(PRODUCT_PRICE);
        const productPricevalue = await productPrice.evaluate(el => el.textContent);


        console.log(JSON.stringify({ 'name': productNamevalue, price: productPricevalue, url: productUrl, images: productImages }));
    }
    await browser.close();
})();