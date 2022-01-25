const puppeteer = require('puppeteer');

async function thick_thockGetProducts() {
    const url = 'https://thicthock.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    thick_thockGetProducts
}