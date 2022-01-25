const puppeteer = require('puppeteer');

async function typr.toolsGetProducts() {
    const url = 'https://typr.tools';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    typr.toolsGetProducts
}