import puppeteer from 'puppeteer';
            export module keys.my {
                export async function getKeyboards(){
                    const url = 'https://keys.my';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getSwitches(){
                    const url = 'https://keys.my';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getOther(){
                    const url = 'https://keys.my';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
            }
            