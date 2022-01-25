const puppeteer = require('puppeteer');

async function keyz.ioGetProducts() {
    const url = 'https://keyz.io';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    keyz.ioGetProducts
}