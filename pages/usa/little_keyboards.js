const puppeteer = require('puppeteer');

async function little_keyboardsGetProducts() {
    const url = 'https://www.littlekeyboards.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    little_keyboardsGetProducts
}