const puppeteer = require('puppeteer');

async function keycroxGetProducts() {
    const url = 'https://www.keycrox.co.uk';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    keycroxGetProducts
}