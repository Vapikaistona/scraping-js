const puppeteer = require('puppeteer');

async function monstargearGetProducts() {
    const url = 'https://www.monstargears.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    monstargearGetProducts
}