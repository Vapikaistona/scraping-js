const emptyTemplate =
`const puppeteer = require('puppeteer');

async function $$nameGetProducts() {
    const url = '$$url';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    $$nameGetProducts
}`;

module.exports = {
    emptyTemplate
}