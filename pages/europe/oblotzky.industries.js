const puppeteer = require('puppeteer');

async function oblotzky.industriesGetProducts() {
    const url = 'https://oblotzky.industries';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    oblotzky.industriesGetProducts
}