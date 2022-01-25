const puppeteer = require('puppeteer');

async function space_cablesGetProducts() {
    const url = 'http://spaceholdings.net';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    space_cablesGetProducts
}