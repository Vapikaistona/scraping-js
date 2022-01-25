const puppeteer = require('puppeteer');

async function fancy_customsGetProducts() {
    const url = 'https://fancycustoms.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    fancy_customsGetProducts
}