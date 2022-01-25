const puppeteer = require('puppeteer');

async function bolsa_supplyGetProducts() {
    const url = 'https://bolsakeyboardsupply.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    bolsa_supplyGetProducts
}