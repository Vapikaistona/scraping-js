const puppeteer = require('puppeteer');

async function 1upkeyboardsGetProducts() {
    const url = 'https://1upkeyboards.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    1upkeyboardsGetProducts
}