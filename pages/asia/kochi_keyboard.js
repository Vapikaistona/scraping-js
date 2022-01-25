const puppeteer = require('puppeteer');

async function kochi_keyboardGetProducts() {
    const url = 'https://kochikeyboard.stores.jp';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    kochi_keyboardGetProducts
}