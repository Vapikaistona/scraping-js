const puppeteer = require('puppeteer');

async function eloquent_clicksGetProducts() {
    const url = 'https://www.eloquentclicks.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    eloquent_clicksGetProducts
}