const puppeteer = require('puppeteer');

async function ctrlshiftescGetProducts() {
    const url = 'https://www.ctrlshiftesc.co.za';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    ctrlshiftescGetProducts
}