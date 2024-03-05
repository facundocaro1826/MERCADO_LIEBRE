const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { loadData } = require('../../data')
module.exports = (req, res)=>{
    const {id} = req.params;
    const products = loadData();
    const productFind = products.find(p => p.id === +id)
    res.render("product/detail", {product : productFind, toThousand})
}