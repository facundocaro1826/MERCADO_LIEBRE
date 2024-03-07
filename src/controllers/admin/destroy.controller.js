const { loadData, saveData } = require('../../data')
const path = require('path');
const fs = require("fs");

module.exports = (req, res)=>{
    const {id} = req.params;
   
  
    const products = loadData();
    const producLessOne = products.filter(p => p.id !== +id);

    const productDestroy = products.find(p => p.id === +id)             // producto a eliminar

    const pathFile = path.join(__dirname, "../../../public/images/products/" + productDestroy.image)
    const existFile = fs.existsSync(pathFile)
    if(existFile){
      fs.unlinkSync(pathFile)  
    }
    saveData(producLessOne);
    
    res.redirect("/productos")
}