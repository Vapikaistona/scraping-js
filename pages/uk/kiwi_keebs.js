const puppeteer = require('puppeteer');

async function kiwi_keebsGetProducts() {
    const url = 'https://kiwikeebs.co.uk';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    kiwi_keebsGetProducts
}