const { loadData } = require("../../data");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res)=>{
    const products = loadData()
    const productInsale = products.filter(p => p.category === "in-sale" );
    const productVisited = products.filter(p => p.category === "visited" );
    res.render("other/home", {productInsale, productVisited, toThousand})
}