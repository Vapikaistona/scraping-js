const puppeteer = require('puppeteer');

async function asceny_gearGetProducts() {
    const url = 'https://www.instagram.com';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    asceny_gearGetProducts
}