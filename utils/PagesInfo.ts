import fs from 'fs';
import { templates } from './templates/newFile';
import puppeteer from 'puppeteer';
import { Collection, MongoDBNamespace } from 'mongodb';

export module pages {
        export async function write() {
            const allPages = await this.get();
            for (const region of allPages) {
                const dirPath = `${__dirname}/../../pages/${region.region}`;
                if (!fs.existsSync(dirPath)){
                    fs.mkdirSync(dirPath);
                }
                for (const web of region.webs) {
                    const filePath = `${dirPath}/${web.name}.ts`;
                    if (!fs.existsSync(filePath)){
                        const newTemplate: string = new templates.PageTemplate(web).template;
                        fs.writeFileSync(filePath, newTemplate);
                    }
                }
            }
        };
        export async function writeDB(pagesCollection: Collection) {
            const allPages = await this.get();
            const insertPages = [];
            for (const region of allPages) {
                for (const web of region.webs) {
                    try {
                        const details = await getDetails(web.url);
                        insertPages.push({ ...web, ...details, region: region.region });
                    } catch (error) {
                        console.log(JSON.stringify(error))
                    }
                }
            }
            pagesCollection.insertMany(insertPages);
        };
    
        export async function get() {
            try {
                const url = 'https://www.alexotos.com/keyboard-vendor-list/';
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(url);
                const allPages = await page.evaluate(() => {
                    console.log(document.title);
                    const columns = document.querySelectorAll('section[data-id=e69f1cf] > div > div');
                    const data = [];
                    for (const column of columns) {
                        let dataColumn = [...column.querySelectorAll('div .elementor-element')].map(region => {
                            const content = region.querySelectorAll('div.elementor-widget-container p');
                            const regionName = content[0].textContent.toLowerCase().replace('/', ' ').replace(':', '').split(' ').join('_');
                            const webs = [...content[1].querySelectorAll('a')].map(web => {
                                const url = new URL (web.href).origin;
                                return { url, name: web.text.toLowerCase().replace('/', ' ').split(' ').join('_').trim() }
                            });
                            return { region: regionName, webs };
                        });
                        data.push(...dataColumn);
                    }
                    return data;
                });
                await browser.close();
                return allPages;
            } catch (error) {
                console.log(error);
            }  
        };
    
        export async function getDetails(url: string){
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);
            const info = await page.evaluate(() => {
                let icons = [];
                icons = [...document.querySelectorAll('link[rel="apple-touch-icon"]')].map((link: any) => link.href);
                if (icons.length === 0){
                    icons = [...document.querySelectorAll('link[rel="shortcut icon"]')].map((link: any) => link.href);
                }
                const descItem: any = document.querySelector('meta[name=description]');
                const description: string = descItem ? descItem.content : '';
                const titleItem: any = document.querySelector('title')
                const title: string = titleItem ? titleItem.text.trim() : '';
                return { icons, title, description };
            });
            await browser.close();
            return info;
        };
    }

