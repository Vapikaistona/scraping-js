const puppeteer = require('puppeteer');

async function wuque_studioGetProducts() {
    const url = 'https://shop.wuquestudio.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    wuque_studioGetProducts
}