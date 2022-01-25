const puppeteer = require('puppeteer');

async function mechsupplyGetProducts() {
    const url = 'http://www.mechsupply.co.uk';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    mechsupplyGetProducts
}