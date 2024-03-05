const { loadData, saveData } = require('../../data')


module.exports = (req, res)=>{
    const {id} = req.params;
   
  
    const products = loadData();
    const producLessOne = products.filter(p => p.id !== +id);
    saveData(producLessOne);
    
    res.redirect("/productos")
}