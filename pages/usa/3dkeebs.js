const puppeteer = require('puppeteer');

async function 3dkeebsGetProducts() {
    const url = 'https://3dkeebs.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    3dkeebsGetProducts
}