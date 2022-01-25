const puppeteer = require('puppeteer');

async function tokyo_keyboardGetProducts() {
    const url = 'https://tokyokeyboard.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    tokyo_keyboardGetProducts
}