const puppeteer = require('puppeteer');

async function elboard_keyboard_supplyGetProducts() {
    const url = 'https://elboard.store';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    elboard_keyboard_supplyGetProducts
}