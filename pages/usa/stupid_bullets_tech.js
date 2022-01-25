const puppeteer = require('puppeteer');

async function stupid_bullets_techGetProducts() {
    const url = 'https://stupidbulletstech.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    stupid_bullets_techGetProducts
}