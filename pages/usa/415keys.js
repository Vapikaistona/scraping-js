const puppeteer = require('puppeteer');

async function 415keysGetProducts() {
    const url = 'https://415keys.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    415keysGetProducts
}