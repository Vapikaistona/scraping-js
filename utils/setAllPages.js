const pages = require('../pages');
const fs = require('fs');
const {emptyTemplate} = require('../utils/templates/newFile');
async function setPages() {
    const allPages = await pages.getAllPages();
    for (const region of allPages) {
        const dirPath = `${__dirname}/../pages/${region.region}`;
        if (!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath);
        }
        for (const web of region.webs) {
            const filePath = `${dirPath}/${web.name}.js`;
            if (!fs.existsSync(filePath)){
                fs.writeFileSync(filePath, emptyTemplate.replaceAll('$$name', web.name).replaceAll('$$url', web.url));
            }
        }
    }
};
module.exports = {
    setPages
}