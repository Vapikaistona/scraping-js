const puppeteer = require('puppeteer');

async function merge_designGetProducts() {
    const url = 'https://mergedesign.store';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    merge_designGetProducts
}