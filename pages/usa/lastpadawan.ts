import puppeteer from 'puppeteer';
            export module lastpadawan {
                export async function getKeyboards(){
                    const url = 'https://www.lastpadawan.com';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getSwitches(){
                    const url = 'https://www.lastpadawan.com';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getOther(){
                    const url = 'https://www.lastpadawan.com';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
            }
            