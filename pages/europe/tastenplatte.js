const puppeteer = require('puppeteer');

async function tastenplatteGetProducts() {
    const url = 'https://www.tastenplatte.de';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    tastenplatteGetProducts
}