const puppeteer = require('puppeteer');

async function getAllPages() {
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
                        return { url: new URL (web.href).origin, name: web.text.toLowerCase().replace('/', ' ').split(' ').join('_')}
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
}

module.exports = {
    getAllPages
}