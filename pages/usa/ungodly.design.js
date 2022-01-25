const puppeteer = require('puppeteer');

async function ungodly.designGetProducts() {
    const url = 'https://ungodly.design';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    ungodly.designGetProducts
}