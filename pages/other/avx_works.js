const puppeteer = require('puppeteer');

async function avx_worksGetProducts() {
    const url = 'https://avxworks.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    avx_worksGetProducts
}