const puppeteer = require('puppeteer');

async function the_key_dot_companyGetProducts() {
    const url = 'http://thekey.company';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    the_key_dot_companyGetProducts
}