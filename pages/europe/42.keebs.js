const puppeteer = require('puppeteer');

async function 42.keebsGetProducts() {
    const url = 'https://42keebs.eu';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    42.keebsGetProducts
}