const puppeteer = require('puppeteer');

async function prime_keyboardsGetProducts() {
    const url = 'https://www.primekb.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    prime_keyboardsGetProducts
}