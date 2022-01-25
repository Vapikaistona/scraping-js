const puppeteer = require('puppeteer');

async function konoGetProducts() {
    const url = 'https://kono.store';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    konoGetProducts
}