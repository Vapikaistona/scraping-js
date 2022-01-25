const puppeteer = require('puppeteer');

async function keys.myGetProducts() {
    const url = 'https://keys.my';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    keys.myGetProducts
}