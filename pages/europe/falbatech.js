const puppeteer = require('puppeteer');

async function falbatechGetProducts() {
    const url = 'https://falba.tech';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    falbatechGetProducts
}