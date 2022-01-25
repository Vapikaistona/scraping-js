const puppeteer = require('puppeteer');

async function keebsforallGetProducts() {
    const url = 'https://keebsforall.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    keebsforallGetProducts
}