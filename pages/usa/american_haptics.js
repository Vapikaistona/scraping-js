const puppeteer = require('puppeteer');

async function american_hapticsGetProducts() {
    const url = 'https://american-haptics.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    american_hapticsGetProducts
}