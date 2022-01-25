const puppeteer = require('puppeteer');

async function osume_keysGetProducts() {
    const url = 'https://www.osumekeys.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    osume_keysGetProducts
}