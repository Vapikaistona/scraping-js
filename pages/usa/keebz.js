const puppeteer = require('puppeteer');

async function keebzGetProducts() {
    const url = 'https://www.keebz.net';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    keebzGetProducts
}