const puppeteer = require('puppeteer');

async function novelkeys_GetProducts() {
    const url = 'https://novelkeys.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    novelkeys_GetProducts
}