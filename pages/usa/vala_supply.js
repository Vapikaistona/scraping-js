const puppeteer = require('puppeteer');

async function vala_supplyGetProducts() {
    const url = 'https://vala.supply';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    vala_supplyGetProducts
}