const puppeteer = require('puppeteer');

async function protozoa_studioGetProducts() {
    const url = 'https://protozoa.studio';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    protozoa_studioGetProducts
}