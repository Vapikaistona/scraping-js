const puppeteer = require('puppeteer');

async function malvix_studioGetProducts() {
    const url = 'https://store.malvix.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    malvix_studioGetProducts
}