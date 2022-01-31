import puppeteer from 'puppeteer';
            export module depressed_keebs {
                export async function getKeyboards(){
                    const url = 'https://depressedkeebs.com';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getSwitches(){
                    const url = 'https://depressedkeebs.com';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getOther(){
                    const url = 'https://depressedkeebs.com';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
            }
            