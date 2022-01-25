const puppeteer = require('puppeteer');

async function uk-keycapsGetProducts() {
    const url = 'http://www.ukkeycaps.co.uk';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    uk-keycapsGetProducts
}