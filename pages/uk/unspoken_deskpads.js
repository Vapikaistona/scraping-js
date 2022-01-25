const puppeteer = require('puppeteer');

async function unspoken_deskpadsGetProducts() {
    const url = 'https://www.unspokendeskpads.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    unspoken_deskpadsGetProducts
}