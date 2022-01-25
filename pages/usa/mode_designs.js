const puppeteer = require('puppeteer');

async function mode_designsGetProducts() {
    const url = 'https://modedesigns.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    mode_designsGetProducts
}