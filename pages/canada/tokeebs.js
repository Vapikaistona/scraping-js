const puppeteer = require('puppeteer');

async function tokeebsGetProducts() {
    const url = 'https://tokeebs.ca';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    tokeebsGetProducts
}