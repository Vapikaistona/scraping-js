const puppeteer = require('puppeteer');

async function mech_landGetProducts() {
    const url = 'https://mech.land';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    mech_landGetProducts
}