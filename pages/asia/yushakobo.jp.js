const puppeteer = require('puppeteer');

async function yushakobo.jpGetProducts() {
    const url = 'https://yushakobo.jp';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    yushakobo.jpGetProducts
}