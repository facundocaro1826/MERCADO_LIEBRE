const fs = require('fs');
const path = require('path')
module.exports = {
   loadData: (filenameJSON = 'productsDataBase') => {
    const pathJson = path.join(__dirname, `./${filenameJSON}.json`);
    const dataJson = fs.readFileSync(pathJson, 'utf-8'); 
    const dataJs = JSON.parse(dataJson);
    return dataJs;
   },
   saveData: (data, filenameJSON = 'productsDataBase')=>{
    const pathJson = path.join(__dirname, `./${filenameJSON}.json`);
    const dataString = JSON.stringify(data, null, 3)
    fs.writeFileSync(pathJson, dataString, 'utf-8')
   }
}