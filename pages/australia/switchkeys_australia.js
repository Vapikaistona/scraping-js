const puppeteer = require('puppeteer');

async function switchkeys_australiaGetProducts() {
    const url = 'https://www.switchkeys.com.au';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    switchkeys_australiaGetProducts
}