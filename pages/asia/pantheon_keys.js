const puppeteer = require('puppeteer');

async function pantheon_keysGetProducts() {
    const url = 'https://pantheonkeys.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    pantheon_keysGetProducts
}