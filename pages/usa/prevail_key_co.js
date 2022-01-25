const puppeteer = require('puppeteer');

async function prevail_key_coGetProducts() {
    const url = 'https://prevailkeyco.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    prevail_key_coGetProducts
}